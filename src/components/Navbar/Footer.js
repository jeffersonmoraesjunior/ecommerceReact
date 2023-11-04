import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from '../Navbar/Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <Facebook/>
                </li>
                <li>
                    <Instagram/>
                </li>
                <li>
                    <Linkedin/>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>LOGO</span> 2023
            </p>
        </footer>
    )
}

export default Footer