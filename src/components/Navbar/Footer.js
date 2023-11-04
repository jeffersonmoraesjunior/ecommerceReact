import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from '../Navbar/Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
            </ul>
            <ul>
                <p className={styles.copy_right}>
                    <span>ECOMMERCE GRUPO 2</span> © 2023
                </p>
            </ul>

        </footer>
    )
}

export default Footer