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
                        <h4>Dúvidas</h4>
                        <a href="/">
                            <p>Fala Empresas</p>
                        </a>
                        <a href="/">
                            <p>Contato</p>
                        </a>
                        <a href="/">
                            <p>Termos de uso</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Resource</h4>
                        <a href="/">
                            <p>Sobre</p>
                        </a>
                        <a href="/">
                            <p>Blog</p>
                        </a>
                        <a href="/">
                            <p>Contato</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Nossas Redes Sociais</h4>
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
                            {new Date().getFullYear()} © Copyright 2020. Todos os direitos
                            reservados do Grupo 2 🚀.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/termos-servicos">
                            <div>
                                <p>Termos e Serviços</p>
                            </div>
                        </a>
                        <a href="/politicas-de-privacidade">
                            <div>
                                <p>Politicas de Privacidade</p>
                            </div>
                        </a>
                        <a href="/cookies">
                            <div>
                                <p>Declarações de Cookies</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
