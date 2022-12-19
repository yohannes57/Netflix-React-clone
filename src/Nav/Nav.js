import React from "react";
import "./Nav.css";
import Logo from "../assets/img/Netflix-Brand-Logo.png";
import search from "../assets/img/Netflix-Symbol.png";
import HeaderProps from "./NavProps";
// import "./bootstrap.css";
function Nav() {
  return (
    <>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="/netflex.com">
              <img src={Logo} alt="logo" />
            </a>
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <HeaderProps url="/mac" name="Mac" />
                <HeaderProps url="/iphone" name="Iphone" />
                <HeaderProps url="/ipad" name="Ipad" />
                <HeaderProps url="/watch" name="Watch" />
                <HeaderProps url="/tv" name="Tv" />
                <HeaderProps url="/music" name="Music" />
                <HeaderProps url="/support" name="Support" />
                <li className="nav-item nav_avatar">
                  <a className="nav-link js-scroll-trigger" href="/netflix.com">
                    <img src={search} alt="cart" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Nav;
