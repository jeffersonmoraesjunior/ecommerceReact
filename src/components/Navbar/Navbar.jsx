import { Link } from 'react-router-dom';

import Container from './Container';
import styles from '../Navbar/Navbar.module.css';
import logo from '../../assets/images/logo1.png';
import login from '../../assets/images/login.png';
import { useUser } from '../../context/index';

function Navbar() {
    const { user } = useUser();
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="logo" className={styles.logo} />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/products">All Products</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/about">Contacts</Link>
                    </li>
                    <li>                        
                        <Link to="/sign-in">                            
                            <img src={login} alt="" />
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <h3> {user}</h3>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}

export default Navbar;
