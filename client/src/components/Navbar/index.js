import React, { useContext } from "react";
import { Link } from "react-scroll";
import { Context } from "../Context";
function Navbar() {
  const { value, setValue } = useContext(Context);
  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  function onClick(e) {
    let _val = e.target.innerText.toProperCase().split(" ").join("_").trim();
    console.log(_val);
    setValue(_val);
    toLink(_val);
  }
  function toLink(e) {
    setTimeout(function () {
      window.location = `#${e}`;
    }, 500);
  }

  return (
    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li>
            <a href="/" className="logo-text">
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
                      <Link
                        className="uk-nav-header"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={onClick}
                      >
                        Services
                      </Link>
                    </li>
                    <li className="uk-nav-divider"></li>
                    <li>
                      <Link
                        to="venues"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={onClick}
                      >
                        Venues
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="occasions"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={onClick}
                      >
                        Occasions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="scheduling"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={onClick}
                      >
                        Scheduling
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="Faq"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={onClick}
                      >
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li className="uk-active">
                      <Link
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={onClick}
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li className="uk-nav-divider"></li>
                    <li>
                      <Link
                        to="Instagram"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={onClick}
                      >
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="Mission_Statement"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={onClick}
                      >
                        Mission Statement
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="Testimonials"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={onClick}
                      >
                        Testimonials
                      </Link>
                    </li>

                    <li className="uk-active">
                      <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={onClick}
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="uk-nav-divider"></li>
                    <li>
                      <Link
                        to="Book_Now"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={onClick}
                      >
                        Book Now
                      </Link>
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
