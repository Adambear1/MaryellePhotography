import React from "react";

function Navbar() {
  return (
    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li>
            <a href="#" className="logo-text">
              Maryelle Photography
            </a>
            <div className="uk-navbar-dropdown uk-navbar-dropdown-width-2">
              <div
                className="uk-navbar-dropdown-grid uk-child-width-1-2"
                uk-grid="true"
              >
                <div>
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li className="uk-active">
                      <li className="uk-nav-header">Services</li>
                    </li>
                    <li className="uk-nav-divider"></li>
                    <li>
                      <a href="#venues">Venues</a>
                    </li>
                    <li>
                      <a href="#occasions">Occasions</a>
                    </li>
                    <li>
                      <a href="#scheduling">Scheduling</a>
                    </li>
                    <li>
                      <a href="#faq">FAQ</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li className="uk-active">
                      <li className="uk-nav-header">Portfolio</li>
                    </li>
                    <li className="uk-nav-divider"></li>
                    <li>
                      <a href="#">Photos</a>
                    </li>
                    <li>
                      <a href="#">Testimonies</a>
                    </li>
                    <li className="uk-active">
                      <li className="uk-nav-header">Contact</li>
                    </li>
                    <li className="uk-nav-divider"></li>
                    <li>
                      <a href="#">Book Now</a>
                    </li>
                    <li>
                      <a href="#">Social Media</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
