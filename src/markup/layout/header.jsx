import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Menu from "./menu";
import { css } from "@emotion/react";

// const options = [
//     { value: 'English', label: 'English' }
// ]
// const customStyles = {
//     option: (provided, state) => ({
//       ...provided,
//       padding: '10px',
//       backgroundImage: state.isSelected
//         ? 'linear-gradient(90deg, rgba(206,142,14,1) 20%, rgba(192,40,42,1) 100%)'
//         : 'none', // Set a background image for selected options
//       color: state.isSelected ? 'white' : 'black',
//     }),
//   };

class Header extends Component {
  state = {
    scrolled: false,
  };

  componentDidMount() {
    var btn = document.querySelector(".mobile-nav-toggler");
    var closeBtn = document.querySelector(".close-btn");
    var body = document.getElementsByTagName("body")[0];

    function addFunc() {
      return body.classList.add("mobile-menu-visible");
    }
    function closeFunc() {
      return body.classList.remove("mobile-menu-visible");
    }

    btn.addEventListener("click", addFunc);
    closeBtn.addEventListener("click", closeFunc);

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    if (window.scrollY > 100) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const { scrolled } = this.state;
    return (
      <>
        <header class={scrolled ? "main-header fixed-header" : "main-header"}>
          <div class="header-top">
            <div class="auto-container">
              <div class="inner">
                <div class="top-left">
                  <div class="logo-box">
                    <div class="logo">
                      <Link to={"/#"}>
                        <img
                          src={require("../../assets/images/seabed2crest-logo.png")}
                          alt=""
                          width={"110px"}
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="top-middile">
                  <div class="language">
                    <span>Language:</span>
                    <span>English</span>
                    {/* <form action="#" class="language-switcher">
                                        <Select options={options} styles={customStyles} />

                                        </form> */}
                  </div>
                  <div class="contact-info">
                    <div class="single-info">
                      <div class="icon-box">
                        <i class="flaticon-call-1"></i>
                      </div>
                      <div class="text">Phone Number</div>

                      <h4>
                        <Link to={"/tel:+91 7349368311"}>+91 7349368311</Link>
                      </h4>
                    </div>
                    <div class="single-info">
                      <div class="icon-box">
                        <i class="flaticon-email-4"></i>
                      </div>
                      <div class="text">Email Address</div>
                      <h4>
                        <Link to={"mailto:info@seabed2crest.com"}>
                          info@seabed2crest.com
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>

                <div class="top-right">
                  <Link to={"/contact"} class="theme-btn btn-style-two">
                    <span class="btn-title">Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="header-upper">
            <div class="auto-container">
              <div class="inner-container">
                <div class="nav-outer clearfix">
                  <div class="mobile-nav-toggler">
                    <span class="icon fal fa-bars"></span>
                  </div>

                  <nav class="main-menu navbar-expand-md navbar-light">
                    <Menu />
                  </nav>

                  <ul class="social-links clearfix">
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61550736875585&mibextid=ZbWKwL">
                        <span class="fab fa-facebook-f"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/Seabed2Crest">
                        <i class="fa-brands fa-x-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/seabed2crest/">
                        <span class="fab fa-linkedin-in"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/seabed2crest?igshid=NjIwNzIyMDk2Mg==">
                        <span class="fab fa-instagram"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.threads.net/@seabed2crest">
                        <i class="fa-brands fa-threads"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            class={
              scrolled ? "sticky-header animated slideInDown" : "sticky-header"
            }
          >
            <div class="auto-container clearfix">
              <div class="logo pull-left">
                <Link to={"/#"} title="">
                  <img
                    src={require("../../assets/images/seabed2crest-logo.png")}
                    alt=""
                    title=""
                    width={"60px"}
                  />
                </Link>
              </div>

              <div class="pull-right">
                <nav class="main-menu clearfix">
                  <Menu />
                </nav>
              </div>
            </div>
          </div>

          <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn">
              <span class="icon flaticon-cancel"></span>
            </div>

            <nav class="menu-box">
              <div class="nav-logo">
                <Link to={"/#"}>
                  <img
                    src="assets/images/seabed2crest-logo.png"
                    alt=""
                    title=""
                    width={"60px"}
                  />
                </Link>
              </div>
              <div class="menu-outer">
                <Menu />
              </div>
              <div class="social-links">
                <ul class="clearfix">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61550736875585&mibextid=ZbWKwL">
                      <span class="fab fa-facebook-f"></span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/seabed2crest/">
                      <span class="fab fa-linkedin-in"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/seabed2crest?igshid=NjIwNzIyMDk2Mg==">
                      <span class="fab fa-instagram"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.threads.net/@seabed2crest">
                      <i class="fa-brands fa-threads"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </>
    );
  }
}
export default Header;
