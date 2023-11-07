import React from "react"
import Navbar2 from "../../components/Navbar/Navbar2";
import FooterContainer from '../../components/Footer/index';
import linkedin from '../../assets/images/linkedin.png';
import instagram from '../../assets/images/instagram.png';
import adriane from '../../assets/images/adriane.jpeg';
import janaelson from '../../assets/images/janaelson.jpeg';
import jefferson from '../../assets/images/jefferson.jpeg';
import livya from '../../assets/images/livya.jpeg';
import rayan from '../../assets/images/rayan.jpeg';
import renan from '../../assets/images/renan.jpeg';
import './about.css';


function About() {

    document.title = 'About Us | Serracommerce';
    
    return (
        <>
            <Navbar2 />
            <div className="integrantes">
                <br />
                <h1>About Us</h1>
                <br />
                <hr />
                <br />
                <div class="pessoas-container">
                    <div className="pessoa">
                        <img className="foto" src={adriane} alt="" />
                        <div className="pessoa-lado">
                            <div className="pessoa-info">
                                <h2>Adriane Muniz</h2>
                                <p class="descricao">32 years old, graduated in Graphic Design,
                                    Postgraduate in Project Management and Software Engineering.</p>
                            </div>
                            <div className="redes-sociais">
                                <a href="https://www.linkedin.com/in/adrianecosta90/" target="_blank" rel="noreferrer" class="link-contato">
                                    <img src={linkedin} alt="" />
                                </a>
                                <a href="https://www.instagram.com/dricosta90/" target="_blank" rel="noreferrer" class="link-contato">
                                    <img src={instagram} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pessoa">
                        <img className="foto" src={janaelson} alt="" />
                        <div className="pessoa-lado">
                            <div className="pessoa-info">
                                <h2>Janaelson Soares</h2>
                                <p class="descricao">Hello, I'm Janaelson, I'm 34 years old and I'm at Serratec.</p>
                            </div>
                            <div className="redes-sociais">
                                <a href="https://www.linkedin.com/in/janaelson-soares-3a4641293/" target="_blank" rel="noreferrer">
                                    <img src={linkedin} alt="" />
                                </a>
                                <a href="https://www.instagram.com/janaelsongs/" target="_blank" rel="noreferrer">
                                    <img src={instagram} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pessoa">
                        <img className="foto" src={jefferson} alt="" />
                        <div className="pessoa-lado">
                            <div className="pessoa-info">
                                <h2>Jefferson Moraes</h2>
                                <p class="descricao">24 years old, graduated in Marketing and brown belt in Jiu-Jitsu.</p>
                            </div>
                            <div className="redes-sociais">
                                <a href="https://www.linkedin.com/in/jeffersonmoraesjunior/" target="_blank" rel="noreferrer">
                                    <img src={linkedin} alt="" />
                                </a>
                                <a href="https://www.instagram.com/jeffersonmoraesjunior/" target="_blank" rel="noreferrer">
                                    <img src={instagram} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pessoa">
                        <img className="foto" src={livya} alt="" />
                        <div className="pessoa-lado">
                            <div className="pessoa-info">
                                <h2>Lívya Coelho</h2>
                                <p class="descricao">...</p>
                            </div>
                            <div className="redes-sociais">
                                <a href="https://www.linkedin.com/in/livya-coelho-452093270/" target="_blank" rel="noreferrer" class="link-contato">
                                    <img src={linkedin} alt="" />
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" class="link-contato">
                                    <img src={instagram} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pessoa">
                        <img className="foto" src={rayan} alt="" />
                        <div className="pessoa-lado">
                            <div className="pessoa-info">
                            <h2>Rayan Ferraz</h2>
                            <p class="descricao">21 years old, FullStack Developer. Graduated from the ICT/Software residency course
              FullStack of Serratec for 2nd cicle of the year 2023.</p>
                            </div>
                            <div className="redes-sociais">
                                <a href="https://www.linkedin.com/in/rayan-ferraz-581449218/" target="_blank" rel="noreferrer">
                                    <img src={linkedin} alt="" />
                                </a>
                                <a href="https://www.instagram.com/rayanferrazz/" target="_blank" rel="noreferrer">
                                    <img src={instagram} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pessoa">
                        <img className="foto" src={renan} alt="" />
                        <div className="pessoa-lado">
                            <div className="pessoa-info">
                                <h2>Renan Pinela</h2>
                                <p class="descricao">29 years old, graphic designer and videomaker. I hate everybody and everything.</p>
                            </div>
                            <div className="redes-sociais">
                                <a href="https://www.linkedin.com/in/renan-pinela-98509a240/" target="_blank" rel="noreferrer">
                                    <img src={linkedin} alt="" />
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                    <img src={instagram} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <FooterContainer />
        </>
    )
}

export default About;