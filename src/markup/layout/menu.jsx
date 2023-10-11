import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const scrollToTop = () => {
    window.scrollTo({ top: 400, behavior: "smooth" });
  };


class Menu extends Component {


    render() {
        return (
            <>
                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul class="navigation clearfix">
                        <li class="dropdow"><Link to={'/#'}>Home</Link>

                        {/* //other header designs  */}

                            {/* <ul>
                                <li><Link to={'/#'}>Home page 01</Link></li>
                                <li><Link to={'/index-2'}>Home page 02</Link></li>
                                <li><Link to={'/index-3'}>Home page 03</Link></li>
                                <li><Link to={'/index-4'}>Home page 04</Link></li>
                                <li><Link to={'/onepage'}>Onepage Version</Link></li>
                                <li><Link to={'/rtl-home'}>Home RTL</Link></li>
                                <li class="dropdown"><Link to={'/#'}>Header Styles</Link>
                                    <ul>
                                        <li><Link to={'/'}>Header Style One</Link></li>
                                        <li><Link to={'/index-2'}>Header Style Two</Link></li>
                                        <li><Link to={'/index-3'}>Header Style Three</Link></li>
                                        <li><Link to={'/index-4'}>Header Style Four</Link></li>
                                    </ul>
                                </li>
                            </ul> */}
                        </li>
                        <li><Link to={'/about'} onClick={scrollToTop}>About Us</Link></li>
                        <li class="dropdown"><Link to={'/services-2'}>Services</Link>
                            <ul>
                                <li><Link to={'/services-1'} onClick={scrollToTop}>What We Do</Link></li>
                                <li><Link to={'/services-2'} onClick={scrollToTop}>Our Services</Link></li>
                                {/* <li><Link to={'/portfolio-1'}>Our Works</Link></li> */}
                            </ul>
                        </li>
                        {/* <li class="dropdown"><Link to={'/#'}>Portfolio</Link>
                            <ul>
                                <li><Link to={'/services-details'}>Portfolio One</Link></li>
                                <li><Link to={'/portfolio-2'}>Portfolio Two</Link></li>
                                <li><Link to={'/portfolio-details'}>Portfolio Details</Link></li>
                            </ul>
                        </li> */}
                        {/* <li class="dropdown"><Link to={'/#'}>News</Link>
                            <ul>
                                <li><Link to={'/blog-grid'}>Blog Grid</Link></li>
                                <li><Link to={'/blog-standard'}>Blog Standard</Link></li>
                                <li><Link to={'/blog-details'}>Blog Details</Link></li>
                            </ul>
                        </li> */}

                        {/* just add class name as dropdown for icon and dropdown */}
                        {/* <li ><Link to={'/team'}>Our Team</Link> */}
                            {/* <ul>
                                <li><Link to={'/careers'}>Careers</Link></li>
                                <li><Link to={'/team'}>Team</Link></li>
                                <li><Link to={'/team-details'}>Team Details</Link></li>

                                <li class="dropdown"><Link to={'/#'}>Shop</Link>
                                    <ul>
                                        <li><Link to={'/shop'}>Products</Link></li>
                                        <li><Link to={'/product-details'}>Product Details</Link></li>
                                        <li><Link to={'/shopping-cart'}>Shopping Cart</Link></li>
                                        <li><Link to={'/checkout'}>Checkout</Link></li>
                                    </ul>
                                </li>
                                <li><Link to={'/faq'}>Faq's</Link></li>
                                <li><Link to={'/404'}>404</Link></li>
                            </ul> */}
                        {/* </li> */}

                        <li><Link to={'/contact'} onClick={scrollToTop}>Contact Us</Link></li>
                    </ul>
                </div>

            </>
        )
    }
}
export default Menu;