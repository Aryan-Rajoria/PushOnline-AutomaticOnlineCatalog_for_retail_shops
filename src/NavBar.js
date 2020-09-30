import React, { useState } from "react";
import "./NavBar.css";
import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { FaShoppingBasket, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";
{
  /* <FaShoppingBasket.Provider value={{ size: "2em" }}>
  <div>
    <FaFolder />
  </div>
</FaShoppingBasket.Provider> */
}

function NavBar() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={require("./pushonline.jpg")}
          alt="company_logo"
        />
      </Link>
      <div className="header__visible">
        <Link to="#" className="menu-bars">
          <IconContext.Provider value={{ color: "white",size: "2em" }}>
            <FaBars onClick={showSidebar} />
          </IconContext.Provider>
        </Link>
        <div className={sidebar ? "navmenu active" : "navmenu"}>
          <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon" />
          </div>
          <div className="header__nav">
            <div className="nouse">
              <Link to="#" className="menu-bars" onClick={showSidebar}>
                <IconContext.Provider value={{ color: "white",size: "2em" }}>
                  <AiOutlineClose />
                </IconContext.Provider>
              </Link>
            </div>
            <Link to={!user && "/login"}>
              <div onClick={handleAuthenticaton} className="header__option">
                <span className="header__optionLineOne">
                  Hello {!user ? "Guest" : user.email}
                </span>
                <span className="header__optionLineTwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>

            <Link to="/orders">
              <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
              </div>
            </Link>

            {/* <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div> */}

            <Link to="/checkout">
              <div className="header__optionBasket">
                <IconContext.Provider value={{ color:"white", size: "2.5em" }}>
                  <FaShoppingBasket />
                </IconContext.Provider>
                <span className="header__optionLineTwo header__basketCount">
                  {basket?.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
