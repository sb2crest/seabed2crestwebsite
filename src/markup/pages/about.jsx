import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Brand1 from "../element/brand1";
import Footer2 from "../layout/footer2";

const aboutbg = require("./../../assets/images/background/image-11.jpg");

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <div id="search-popup" class="search-popup">
          <div class="close-search theme-btn">
            <span class="flaticon-cancel"></span>
          </div>
          <div class="popup-inner">
            <div class="overlay-layer"></div>
            <div class="search-form">
              <form
                method="post"
                action="http://azim.commonsupport.com/Finandox/index.html"
              >
                <div class="form-group">
                  <fieldset>
                    <input
                      type="search"
                      class="form-control"
                      name="search-input"
                      value=""
                      placeholder="Search Here"
                      required
                    />
                    <input
                      type="submit"
                      value="Search Now!"
                      class="theme-btn"
                    />
                  </fieldset>
                </div>
              </form>
              <br />
              <h3>Recent Search Keywords</h3>
              <ul class="recent-searches">
                <li>
                  <Link to={"/#"}>Finance</Link>
                </li>
                <li>
                  <Link to={"/#"}>Idea</Link>
                </li>
                <li>
                  <Link to={"/#"}>Service</Link>
                </li>
                <li>
                  <Link to={"/#"}>Growth</Link>
                </li>
                <li>
                  <Link to={"/#"}>Plan</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section class="page-banner">
          <div
            className="page-banner-bg"
            style={{ backgroundImage: "url(" + aboutbg + ")" }}
          ></div>
          <div class="bottom-rotten-curve alternate"></div>

          <div class="auto-container">
            <h1>About Us</h1>
            <ul class="bread-crumb clearfix">
              <li>
                <Link to={"/#"}>Home</Link>
              </li>
              <li class="active">About Us</li>
            </ul>
          </div>
        </section>

        {/* About Section Two */}
        <section class="about-section-two">
          <div class="auto-container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="image-wrapper">
                  <div class="image-one">
                    <img
                      src={require("../../assets/images/ceo.jpeg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="content-box">
                  <div class="sec-title">
                    <div class="sub-title">About Us</div>
                    <h2>
                      We Work With <br />
                      You To Address
                    </h2>
                    <div class="text">
                      At SeaBed2Crest, we are the catalysts of digital
                      transformation. With a focus on innovation, we provide
                      top-tier IT services, web development, and digital
                      marketing solutions that empower businesses to excel in
                      the digital age. Our mission is to drive your success by
                      harnessing the power of technology and creativity.
                    </div>
                  </div>
                  {/* <div class="author-info">
                    <div class="wrapper-box">
                      <h2>Rosalina D. William</h2>
                      <div class="designation">Founder</div>
                      <div class="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod..
                      </div>
                    </div>
                    <div class="signature">
                      <img
                        src={require("../../assets/images/resource/signature.png")}
                        alt=""
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        {/* <section class="history-section">
          <div class="auto-container">
            <div class="sec-title text-center light">
              <div class="sub-title">History</div>
              <h2>Our Journey</h2>
            </div>
            <Tab.Container defaultActiveKey="first">
              <Nav className="nav-tabs tab-btn-style-one">
                <Nav.Item>
                  <Nav.Link eventKey="first">2020</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">2015</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">2010</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">2005</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">2000</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first" className=" fadeInUp animated">
                  <div class="row align-items-center">
                    <div class="col-lg-6">
                      <div class="image">
                        <img
                          src={require("../../assets/images/resource/image-18.jpg")}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="content pl-lg-4">
                        <div class="sec-title light">
                          <div class="sub-title">Get Rewards</div>
                          <h2>
                            Just Proved Our Selves <br />
                            For Great Works.
                          </h2>
                        </div>
                        <div class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum.
                        </div>
                        <div class="link-btn">
                          <Link to={"/#"} class="theme-btn btn-style-one">
                            <span class="btn-title">Learn More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second" className=" fadeInUp animated">
                  <div class="row align-items-center">
                    <div class="col-lg-6">
                      <div class="image">
                        <img
                          src={require("../../assets/images/resource/image-18.jpg")}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="content pl-lg-4">
                        <div class="sec-title light">
                          <div class="sub-title">Get Rewards</div>
                          <h2>
                            Just Proved Our Selves <br />
                            For Great Works.
                          </h2>
                        </div>
                        <div class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum.
                        </div>
                        <div class="link-btn">
                          <Link to={"/#"} class="theme-btn btn-style-one">
                            <span class="btn-title">Learn More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third" className=" fadeInUp animated">
                  <div class="row align-items-center">
                    <div class="col-lg-6">
                      <div class="image">
                        <img
                          src={require("../../assets/images/resource/image-18.jpg")}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="content pl-lg-4">
                        <div class="sec-title light">
                          <div class="sub-title">Get Rewards</div>
                          <h2>
                            Just Proved Our Selves <br />
                            For Great Works.
                          </h2>
                        </div>
                        <div class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum.
                        </div>
                        <div class="link-btn">
                          <Link to={"/#"} class="theme-btn btn-style-one">
                            <span class="btn-title">Learn More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth" className=" fadeInUp animated">
                  <div class="row align-items-center">
                    <div class="col-lg-6">
                      <div class="image">
                        <img
                          src={require("../../assets/images/resource/image-18.jpg")}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="content pl-lg-4">
                        <div class="sec-title light">
                          <div class="sub-title">Get Rewards</div>
                          <h2>
                            Just Proved Our Selves <br />
                            For Great Works.
                          </h2>
                        </div>
                        <div class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum.
                        </div>
                        <div class="link-btn">
                          <Link to={"/#"} class="theme-btn btn-style-one">
                            <span class="btn-title">Learn More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth" className=" fadeInUp animated">
                  <div class="row align-items-center">
                    <div class="col-lg-6">
                      <div class="image">
                        <img
                          src={require("../../assets/images/resource/image-18.jpg")}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="content pl-lg-4">
                        <div class="sec-title light">
                          <div class="sub-title">Get Rewards</div>
                          <h2>
                            Just Proved Our Selves <br />
                            For Great Works.
                          </h2>
                        </div>
                        <div class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum.
                        </div>
                        <div class="link-btn">
                          <Link to={"/#"} class="theme-btn btn-style-one">
                            <span class="btn-title">Learn More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </section> */}

        {/* Team Section */}
        {/* <section class="team-section">
          <div class="auto-container">
            <div class="sec-title text-center">
              <div class="sub-title">Our Team</div>
              <h2>Leadership Team</h2>
            </div>
            <div class="row"> */}
              {/* Team Block One */}
              {/* <div class="col-lg-4 team-block-one">
                <div class="inner-box">
                  <div class="image">
                    <img
                      src={require("../../assets/images/resource/team-1.jpg")}
                      alt=""
                    />
                  </div>
                  <div class="content">
                    <div class="designation">Founder</div>
                    <h3>Rosalina D. William</h3> */}
                    {/* social meadia links below name */}

                    {/* <ul class="social-links">
                      <li>
                        <Link to={"/#"}>
                          <span class="fab fa-facebook-f"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <span class="fab fa-twitter"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <span class="fab fa-behance"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <span class="fab fa-youtube"></span>
                        </Link>
                      </li>
                    </ul> */}
                  {/* </div>
                </div>
              </div> */}
              {/* Team Block One */}
              {/* <div class="col-lg-4 team-block-one">
                <div class="inner-box">
                  <div class="image">
                    <img
                      src={require("../../assets/images/resource/team-2.jpg")}
                      alt=""
                    />
                  </div>
                  <div class="content">
                    <div class="designation">CEO</div>
                    <h3>Velavos H. DesuJa</h3> */}
                    {/* social meadia links below name */}

                    {/* <ul class="social-links">
                      <li>
                        <Link to={"/#"}>
                          <span class="fab fa-facebook-f"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <span class="fab fa-twitter"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <span class="fab fa-behance"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <span class="fab fa-youtube"></span>
                        </Link>
                      </li>
                    </ul> */}
                  {/* </div>
                </div>
              </div> */}
              {/* Team Block One */}
              {/* <div class="col-lg-4 team-block-one">
                <div class="inner-box">
                  <div class="image">
                    <img
                      src={require("../../assets/images/resource/team-3.jpg")}
                      alt=""
                    />
                  </div>
                  <div class="content">
                    <div class="designation">Developer</div>
                    <h3>Abdur Rahman J.</h3> */}
                    {/* social meadia links below name */}

                    {/* <ul class="social-links">
                      <li>
                        <Link to={"/#"}>
                          <span class="fab fa-facebook-f"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <span class="fab fa-twitter"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <span class="fab fa-behance"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/#"}>
                          <span class="fab fa-youtube"></span>
                        </Link>
                      </li>
                    </ul> */}
                  {/* </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Services Section Four */}
        <section class="services-section-four services-section-about">
          <div class="auto-container">
            <div class="sec-title text-center">
              <div class="sub-title">Features</div>
              <h2>Core Features</h2>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="icon-box">
                  <div class="icon">
                    <img
                      src={require("../../assets/images/icons/icon-3.png")}
                      alt=""
                    />
                  </div>
                  <h2>Clear Purpose and Goals</h2>
                  <div class="text">
                    Start by defining a clear and specific purpose for your
                    website. What problem does it solve, and what goals should
                    it achieve? Having a well-defined purpose ensures that your
                    website provides real value to users.{" "}
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="icon-box">
                  <div class="icon">
                    <img
                      src={require("../../assets/images/icons/icon-21.png")}
                      alt=""
                    />
                  </div>
                  <h2>User Experience (UX) Design</h2>
                  <div class="text">
                    Prioritize an exceptional user experience (UX). Ensure that
                    the website is easy to navigate, visually appealing, and
                    responsive on various devices. A user-friendly design
                    enhances user satisfaction and engagement.
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="icon-box">
                  <div class="icon">
                    <img
                      src={require("../../assets/images/icons/icon-4.png")}
                      alt=""
                    />
                  </div>
                  <h2>Content Strategy</h2>
                  <div class="text">
                    Develop a comprehensive content strategy that focuses on
                    high-quality, relevant, and engaging content. Content is
                    often the primary reason users visit a website, so make it
                    informative and appealing.{" "}
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="icon-box">
                  <div class="icon">
                    <img
                      src={require("../../assets/images/icons/icon-22.png")}
                      alt=""
                    />
                  </div>
                  <h2>SEO Optimization</h2>
                  <div class="text">
                    Implement strong search engine optimization (SEO) practices
                    to improve your website's visibility in search engine
                    results. This includes keyword research, on-page
                    optimization, and creating SEO-friendly content.{" "}
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="icon-box">
                  <div class="icon">
                    <img
                      src={require("../../assets/images/icons/icon-5.png")}
                      alt=""
                    />
                  </div>
                  <h2>Security Measures</h2>
                  <div class="text">
                    Security is paramount. Protect user data and your website
                    from threats by implementing robust security measures,
                    including SSL certificates, firewalls, and regular security
                    audits. Building trust with users is crucial.{" "}
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="icon-box">
                  <div class="icon">
                    <img
                      src={require("../../assets/images/icons/icon-23.png")}
                      alt=""
                    />
                  </div>
                  <h2>Mobile Responsiveness</h2>
                  <div class="text">
                    Ensure that your website is mobile-responsive. With an
                    increasing number of users accessing websites on mobile
                    devices, providing a seamless experience on smartphones and
                    tablets is essential for reaching a broader audience.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}

        {/* <Brand1 /> */}

        <Footer2 />
      </>
    );
  }
}
export default About;
