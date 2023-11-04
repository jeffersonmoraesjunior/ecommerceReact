import {Link} from 'react-router-dom'

import Container from './Container'
import styles from '../Navbar/Navbar.module.css'
import logo from '../../imgs/logo.png'


function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                    <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/listagem">Todos os Produtos</Link>
                    </li>
                    <li className={styles.item}> 
                    <Link to="/contatos">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar