// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginStyled } from './style';
import { Link } from 'react-router-dom';
import Navbar2 from '../../components/Navbar/Navbar2';
import Container from '../../components/Navbar/Container';
import FooterContainer from '../../components/Footer/index';
import api, { listarPessoa } from '../../services/apiusuario';
import { useUser } from '../../context';


const Login = () => {
    
    document.title = 'Sign In | Serracommerce';

    const [usuario, setUsuario] = useState('janaelson');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useUser();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await listarPessoa(); // Aguarde a resposta da função listarPessoa
            const userData = response.data; // Suponho que os dados do usuário estejam em response.data

            const user = userData.find((user) => user.email === email);

            if (user && user.senha === password) {
                setUser(user.nome);
                navigate('/');
            } else {
                alert('Invalid credentials. Try again!');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    return (
        <>
            <Navbar2 user={usuario} />
            <Container>
                <LoginStyled>
                    <h1>Sign In</h1>
                    <div>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button onClick={handleLogin}>Sign In</button>
                        <p>
                            Don't have an account? <Link to="/sign-up">Sign Up</Link>
                        </p>
                    </div>
                </LoginStyled>
            </Container>
            <FooterContainer />
        </>
    );
};

export default Login;
