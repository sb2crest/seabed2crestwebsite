import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../../assets/css/slider.css";

const slides = [
  {
    title: "We are pioneers in the world of technology",
    description:
      "Delivering innovative solutions that revolutionize industries. Our passion for excellence drives us to shape a brighter digital future.",
    btnLearn: "-- Learn More --",
    finan: "SeaBed2Crest",
    // dox: "2Crest",
    btnService: "-- Our Services --",
    image: require("./../../assets/images/main-slider/1.jpg"),
  },
  {
    title: "We are the driving force behind your digital success",
    description:
      "Providing top-tier IT services that empower businesses to thrive in the digital age. With our expertise, innovation, and unwavering commitment, we turn your technology challenges into opportunities for growth.",
    btnLearn: "-- Learn More --",
    finan: "About Us",
    // dox: "Us",
    btnService: "-- About Us --",
    image: require("./../../assets/images/main-slider/1.jpg"),
  },
  {
    title: "Ready to take your business to the next level?",
    description:
      "Reach out to us today, and let's start a conversation about how we can transform your business.",
    btnLearn: "-- Learn More --",
    finan: "Contact Us",
    // dox: "Us",
    btnService: "--Contact Us --",
    image: require("./../../assets/images/main-slider/1.jpg"),
  },
];

class HomeSlider1 extends Component {
  render() {
    return (
      <>
        <Slider className="slider-wrapper" 
        autoplay={false}
        slidesToShow={1}
        slidesToScroll={1}
        touchDisabled={true}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${slide.image}') no-repeat center center`,
              }}
            >
              <div className="inner">
                <h1>{slide.title}</h1>
                <h2>
                  {slide.finan}
                  <span>{slide.dox}</span>
                </h2>
                <div className="text">{slide.description}</div>
                <div className="btn-box">
                  {index === 0 ? (
                    <Link
                      to={"/services-2"}
                      className="theme-btn btn-style-one"
                    >
                      <span className="btn-title">Our Services</span>
                    </Link>
                  ) : index === 1 ? (
                    <Link to={"/about"} className="theme-btn btn-style-one">
                      <span className="btn-title">About Us</span>
                    </Link>
                  ) : (
                    <Link to={"/contact"} className="theme-btn btn-style-one">
                      <span className="btn-title">Contact Us</span>
                    </Link>
                  )}
                  
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </>
    );
  }
}
export default HomeSlider1;
