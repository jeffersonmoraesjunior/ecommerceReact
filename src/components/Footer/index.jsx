import React from 'react';
import fb from '../../assets/images/fb.png';
import linkedin from '../../assets/images/linkedin.png';
import instagram from '../../assets/images/instagram.png';
import youtube from '../../assets/images/youtube.png';
import './footer.css';
import Translator from '../../services/translator';

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
                        <Translator />
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
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <p>
                                    <img src={fb} alt="" />
                                </p>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <p>
                                    <img src={linkedin} alt="" />
                                </p>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <p>
                                    <img src={instagram} alt="" />
                                </p>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <p>
                                    <img src={youtube} alt="" />
                                </p>
                            </a>
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
                        <a href="/">
                            <div>
                                <p>Terms and Services</p>
                            </div>
                        </a>
                        <a href="/">
                            <div>
                                <p>Privacy Policy</p>
                            </div>
                        </a>
                        <a href="/">
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
