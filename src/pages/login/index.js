// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginStyled } from './style';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import Container from '../../components/Navbar/Container';
import FooterContainer from '../../components/Footer/index';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aqui você deve adicionar a lógica para verificar se as credenciais do usuário são válidas.
    // Isso é apenas um exemplo simplificado.
    if (email === 'seuemail@email.com' && password === 'suasenha') {
      // Credenciais válidas, redirecione para a página Home.
      navigate('/home');
    } else {
      alert('Invalid credentials. Try again!');
    }
  };

  document.title = 'Sign In | Serracommerce'

  return (
    <>
      <Navbar /> {/*mudar para a outra navbar*/}
      <Container>
        <LoginStyled>
          <h1>Sign In</h1>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Sign In</button>
          <p>Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
        </LoginStyled>,
      </Container>
      <FooterContainer />
    </>
  );
};

export default Login;