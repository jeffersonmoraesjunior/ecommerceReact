import React from "react"
import Navbar from "../../components/Navbar/Navbar";
import FooterContainer from '../../components/Footer/index';
import './about.css';

document.title = 'About Us | Serracommerce'

function About() {
    return (
        <>
            <Navbar />
            <body className="body">
                <div className="makers">
                    <h1>About Us</h1>
                    <div>
                        {/*Adriane*/}
                    </div>
                    <div>
                        {/*Janaelson*/}
                    </div>
                    <div>
                        {/*Jefferson*/}
                    </div>
                    <div>
                        {/*Rayan*/}
                    </div>
                    <div>
                        {/*Renan*/}
                    </div>
                </div>
            </body>
            <FooterContainer />
        </>
    )
}

export default About;