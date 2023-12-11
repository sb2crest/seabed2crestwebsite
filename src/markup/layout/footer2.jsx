import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer2 extends Component {
  render() {
    return (
      <>
        {/* <!-- Main Footer --> */}
        <footer class="main-footer style-two">
          <div class="auto-container">
            {/* <!--Widgets Section--> */}
            <div class="widgets-section">
              <div class="row clearfix">
                {/* <!--Column--> */}
                <div class="column col-lg-4">
                  <div class="footer-widget logo-widget">
                    <div class="widget-content">
                      <div class="footer-logo">
                        <Link to={"/#"}>
                          <img
                            src={require("../../assets/images/seabed2crest-logo.png")}
                            alt=""
                            width={"180px"}
                          />
                        </Link>
                      </div>
                      <div class="text">
                        Discover the limitless possibilities with SeaBed2Crest,
                        where innovation meets excellence. Join us on a journey
                        of transformation and success in the digital age.
                      </div>
                      <ul class="social-links clearfix">
                        <li>
                          <a href="https://www.facebook.com/profile.php?id=61550736875585&mibextid=ZbWKwL">
                            <span class="fab fa-facebook-f"></span>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/Seabed2Crest">
                            <span>
                              <i class="fa-brands fa-x-twitter"></i>
                            </span>
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
                            <span>
                              <i class="fa-brands fa-threads"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <!--Column--> */}
                <div class="column col-lg-2">
                  <div class="footer-widget links-widget">
                    <div class="widget-content">
                      <h3>Pages</h3>
                      <div class="row">
                        <div class="col-md-6">
                          <ul>
                            <li>
                              <Link to={"/#"}>Home</Link>
                            </li>
                            <li>
                              <Link to={"/about"}>About</Link>
                            </li>
                            <li>
                              <Link to={"/services-2"}>Services</Link>
                            </li>
                            {/* <li><Link to={'/#'}>Portfolio</Link></li>
                                                        <li><Link to={'/#'}>Pricing</Link></li>
                                                        <li><Link to={'/#'}>Contact</Link></li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 ">
                  <div class="footer-widget links-widget">
                    <div class="widget-content">
                      <h3>Links</h3>
                      <div class="row">
                        <div class="col-md-9">
                          <ul>
                            <li>
                              <Link to={"/services-2"}>Web development</Link>
                            </li>
                            <li>
                              <Link to={"/services-2"}>
                                Product Development
                              </Link>
                            </li>
                            <li>
                              <Link to={"/services-2"}>Web Designing</Link>
                            </li>
                            <li>
                              <Link to={"/services-2"}>Digital Marketing</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!--Column--> */}
                <div class="column col-lg-3">
                  <div class="footer-widget instagram-widget">
                    <h3>Contact Us</h3>
                    <div class="inner-box">
                      {/* <div class="wrapper-box">
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-1.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-1.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-2.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-2.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-3.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-3.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-4.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-4.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-5.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-5.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-6.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-6.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-7.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-7.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-8.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-8.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-9.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-9.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                            </div> */}
                      {/* <!-- /.gallery-wrapper --> */}

                      <div>
                        <p>
                          {" "}
                          <span>
                            <i class="fa-solid fa-phone"></i>
                          </span>
                          <span className="footer-margin">+91 7349368311</span>
                        </p>
                        <p>
                          {" "}
                          <span>
                            <i class="fa-solid fa-envelope"></i>
                          </span>
                          <span className="footer-margin">
                            info@seabed2crest.com
                          </span>
                        </p>
                        <p>
                          {" "}
                          <span>
                            <i class="fa-solid fa-location-dot"></i>
                          </span>
                          <span className="footer-margin">
                            #584 near Suryodaya School, Hesaraghatta hobli,
                            Rajanukunte, Yelahanka Taluk Bangalore North
                            Karnataka - 560064
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Footer Bottom --> */}
          <div class="auto-container">
            <div class="footer-bottom">
              <div class="copyright">
                © 2022 – 2023 seabed2crest{" "}
                <Link to={"/#"}>All Rights Reserved.</Link>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer2;
