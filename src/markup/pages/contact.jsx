/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
import GoogleMaps from "simple-react-google-maps";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Footer2 from "../layout/footer2";
import emailjs from "@emailjs/browser";

const aboutbg = require("./../../assets/images/background/image-11.jpg");
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    // Create a ref for the form element
    this.form = React.createRef();
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  sendEmail = (e) => {
    e.preventDefault();

    // Send email code here...
    emailjs
      .sendForm(
        "service_l6mrhdn",
        "template_4y25g2k",
        this.form.current,
        "-hKIMTAEO_ictw148"
      )
      .then((result) => {
        console.log(result.text);
        this.form.current.reset();
        // Open the modal after successful submission
        this.handleOpen();
        // Reset the form after successful submission
        this.form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  handleDocumentClick = (e) => {
    // Check if the click event occurred outside the modal
    if (this.modalRef && !this.modalRef.contains(e.target)) {
      this.handleClose();
    }
  };

  componentDidMount() {
    // Attach a click event listener to the document to handle clicks outside the modal
    document.addEventListener("click", this.handleDocumentClick);
  }

  componentWillUnmount() {
    // Remove the click event listener when the component is unmounted
    document.removeEventListener("click", this.handleDocumentClick);
  }

  render() {
    return (
      <>
        <Header />

        {/* <!--Search Popup--> */}
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

        {/* <!-- Page Banner Section --> */}
        <section class="page-banner">
          <div
            className="page-banner-bg"
            style={{ backgroundImage: "url(" + aboutbg + ")" }}
          ></div>
          <div class="bottom-rotten-curve alternate"></div>

          <div class="auto-container">
            <h1>Contact Us</h1>
            <ul class="bread-crumb clearfix">
              <li>
                <Link to={"/#"}>Home</Link>
              </li>
              <li class="active">Contact</li>
            </ul>
          </div>
        </section>

        {/* <!-- Map Section --> */}
        {/* <!-- Map Section --> */}
        <section class="map-section">
          <div class="map-column">
            {/* <GoogleMaps
                            apiKey={"AIzaSyBQ5y0EF8dE6qwc03FcbXHJfXr4vEa7z54"}
                            style={{ height: "800px", width: "100%" }}
                            zoom={12}
                            center={{ lat: 37.4224764, lng: -122.0842499 }}
                            markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
                        /> */}
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="100%"
                  height="500"
                  id="gmap_canvas"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.9112707345357!2d77.56406965480224!3d13.16799423910376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19d7fe915333%3A0xcdb2c8559a5ac17!2sSeabed2Crest%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1707710141895!5m2!1sen!2sin"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Contact Section Two --> */}
        <section class="contact-section-two">
          <div class="auto-container">
            <div class="contact-info-area">
              <div class="contact-info">
                <div class="row">
                  <div class="info-column col-lg-4">
                    <div class="icon-box">
                      <div class="icon">
                        <span class="flaticon-email-6"></span>
                      </div>
                      <h3>Email Address</h3>
                      <ul>
                        <li>
                          <Link to={"/mailto:info@seabed2crest.com"}>
                            info@seabed2crest.com
                          </Link>
                        </li>
                        <li>
                          <Link to={"/mailto:info@seabed2crest.com"}> </Link>
                        </li>
                        <li>
                          <Link to={"/mailto:info@seabed2crest.com"}> </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="info-column col-lg-4">
                    <div class="icon-box">
                      <div class="icon">
                        <span class="flaticon-call-1"></span>
                      </div>
                      <h3>Phone Number</h3>
                      <ul>
                        <li>
                          <Link to={"/tel:+91 7349368311"}>+91 7349368311</Link>
                        </li>
                        <li>
                          <Link to={"/tel:+91 8310227105"}>+91 8310227105</Link>
                        </li>
                        <li>
                          <Link to={"/tel:+908(097)56476576"}> </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="info-column col-lg-4">
                    <div class="icon-box">
                      <div class="icon">
                        <span class="flaticon-location"></span>
                      </div>
                      <h3>Office Address</h3>
                      <ul>
                        <li>
                          #584 near Suryodaya School, Hesaraghatta hobli,
                          Rajanukunte,Bangalore North Karnataka - 560064
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-form-area">
              <div class="sec-title text-center">
                <div class="sub-title">Write Here</div>
                <h2>Get In Touch</h2>
              </div>
              {/* <!-- Contact Form--> */}
              <div class="contact-form">
                <form
                  method="post"
                  action=""
                  id="contact-form"
                  ref={this.form}
                  onSubmit={this.sendEmail}
                >
                  <div class="row clearfix">
                    <div class="col-md-6 form-group">
                      <label for="name">Enter your name</label>
                      <input
                        type="text"
                        name="user_name"
                        id="name"
                        placeholder="Enter name here......"
                        required=""
                      />
                      <i class="fas fa-user"></i>
                    </div>

                    <div class="col-md-6 form-group">
                      <label for="email">Enter your email</label>
                      <input
                        type="email"
                        name="user_email"
                        id="email"
                        placeholder="Enter email here......"
                        required=""
                      />
                      <i class="fas fa-envelope"></i>
                    </div>

                    <div class="col-md-12 form-group">
                      <label for="message">Enter your message</label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Enter message here......"
                      ></textarea>
                      <i class="fas fa-edit"></i>
                    </div>

                    <div class="col-md-12 form-group">
                      <Button
                        onClick={this.handleOpen}
                        class="theme-btn btn-style-one"
                        type="submit"
                        name="submit-form"
                      >
                        <span class="btn-title">Get In Touch</span>
                      </Button>{" "}
                    </div>
                  </div>
                </form>
                <div ref={(ref) => (this.modalRef = ref)}>
                  <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <IconButton
                        edge="end"
                        color="inherit"
                        onClick={this.handleClose}
                        aria-label="close"
                        style={{
                          position: "absolute",
                          right: "5px",
                          top: "-10px",
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Message Sent Successfully...
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Thank You!!
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer2 />
      </>
    );
  }
}
export default Contact;
