import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HWfKfDl9G7F26aV65ZcGWTTIt6mntVJBZ47xffg43TGxbRvvVFargSAK1TY8oAJbiDCZNsh5a5hRXRwvZf79vdt00A0qF8aE5"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <div className="nav__route">
              <NavBar />
              <Orders />
            </div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <div className="nav__route">
              <NavBar />
              <Checkout />
            </div>
          </Route>
          <Route path="/payment">
            <div className="nav__route">
              <NavBar />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </div>
          </Route>
          <Route path="/">
            <div className="nav__route">
              <NavBar />
              <Home />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
