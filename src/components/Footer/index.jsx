import React from 'react';
import fb from '../../assets/images/fb.png';
import linkedin from '../../assets/images/linkedin.png';
import instagram from '../../assets/images/instagram.png';
import youtube from '../../assets/images/youtube.png';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>May We Help You?</h4>
                        <a href="/">
                            <p>Contact Us</p>
                        </a>
                        <a href="/">
                            <p>FAQs</p>
                        </a>
                        <a href="/">
                            <p>Location</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Resource</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/">
                            <p>Blog</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Our Social Media</h4>
                        <div className="socialmedia">
                            <p>
                                <img src={fb} alt="" />
                            </p>
                            <p>
                                <img src={linkedin} alt="" />
                            </p>
                            <p>
                                <img src={instagram} alt="" />
                            </p>
                            <p>
                                <img src={youtube} alt="" />
                            </p>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            {new Date().getFullYear()} © Copyright 2020. All rights reserved. Made
                            by Group 2 🚀
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms-and-services">
                            <div>
                                <p>Terms and Services</p>
                            </div>
                        </a>
                        <a href="/privacy-policy">
                            <div>
                                <p>Privacy Policy</p>
                            </div>
                        </a>
                        <a href="/cookies">
                            <div>
                                <p>Cookies Settings</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
