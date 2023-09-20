import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ServiceFilter1 from '../element/service-filter1'
import Footer2 from '../layout/footer2';


const aboutbg = require('./../../assets/images/background/image-11.jpg');
// const casebg = require('./../../assets/images/background/image-14.jpg');

class Services1 extends Component {


    render() {
        return (
            <>
                 <Header/>

                 {/* <!--Search Popup--> */}
                <div id="search-popup" class="search-popup">
                    <div class="close-search theme-btn"><span class="flaticon-cancel"></span></div>
                    <div class="popup-inner">
                        <div class="overlay-layer"></div>
                        <div class="search-form">
                            <form method="post" action="http://azim.commonsupport.com/Finandox/index.html">
                                <div class="form-group">
                                    <fieldset>
                                        <input type="search" class="form-control" name="search-input" value="" placeholder="Search Here" required />
                                        <input type="submit" value="Search Now!" class="theme-btn"/>
                                    </fieldset>
                                </div>
                            </form>
                            <br/>
                            <h3>Recent Search Keywords</h3>
                            <ul class="recent-searches">
                                <li><Link to={'/#'}>Finance</Link></li>
                                <li><Link to={'/#'}>Idea</Link></li>
                                <li><Link to={'/#'}>Service</Link></li>
                                <li><Link to={'/#'}>Growth</Link></li>
                                <li><Link to={'/#'}>Plan</Link></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                
                {/* <!-- Page Banner Section --> */}
                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>

                    <div class="auto-container">
                        <h1>What We Do</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">Services</li>
                        </ul>
                    </div>

                </section>
                {/* <!--End Banner Section --> */}


                {/* <!-- Services Section Three --> */}
                <section class="services-section-three style-two">
                    <div class="auto-container">
                        <div class="row">
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="icon"><span class="flaticon-team"></span><span class="round-shape"></span></div>
                                    <h3>Ideation</h3>
                                    <div class="text">In this phase, creative ideas for the product are generated and refined, laying the groundwork for a clear product concept and vision.</div>
                                </div>
                            </div>
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="icon"><span class="flaticon-process"></span><span class="round-shape"></span></div>
                                    <h3>Validation</h3>
                                    <div class="text">The concept is tested and validated with target users to ensure that it solves a real problem or meets a genuine need in the market.</div>
                                </div>
                            </div>
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="icon"><span class="flaticon-startup"></span><span class="round-shape"></span></div>
                                    <h3>Prototyping</h3>
                                    <div class="text">A functional prototype or mockup is created to visualize and test the product's design and features before full-scale development.</div>
                                </div>
                            </div>
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="icon"><span class="flaticon-world"></span><span class="round-shape"></span></div>
                                    <h3>Marketing</h3>
                                    <div class="text">Strategies and campaigns are planned and executed to create awareness and generate interest in the product among potential users or customers.</div>
                                </div>
                            </div>
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="icon"><span class="flaticon-money-1"></span><span class="round-shape"></span></div>
                                    <h3>Development</h3>
                                    <div class="text">The actual coding and creation of the product take place, transforming the concept into a tangible, functional solution.</div>
                                </div>
                            </div>
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="icon"><span class="flaticon-notebook"></span><span class="round-shape"></span></div>
                                    <h3>Launch</h3>
                                    <div class="text">The product is introduced to the market, making it accessible to users, often with a well-coordinated marketing effort to maximize its reach and impact.</div>
                                </div>
                            </div>
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="icon"><span class="flaticon-assets"></span><span class="round-shape"></span></div>
                                    <h3>Improvement</h3>
                                    <div class="text">Continuous monitoring and user feedback are used to identify areas for enhancement and refinement, leading to iterative improvements and updates.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Case Studies --> */}
                {/* <ServiceFilter1/> */}


                 <Footer2/>
            </>
        )
    }
}
export default Services1;