import { Link } from 'react-router-dom';

import Container from './Container';
import styles from '../Navbar/Navbar.module.css';
import logo from '../../assets/images/logo1.png';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/home">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/products">All Products</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                    <input type="text" placeholder="Search..." name="search"></input>
                </ul>
            </Container>
        </nav>
    );
}

export default Navbar;
