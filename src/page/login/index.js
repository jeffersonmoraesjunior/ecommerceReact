// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginStyled } from './style';
import { Link } from 'react-router-dom';

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
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <LoginStyled>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>Não tem uma conta? <Link to="/cadastro">Cadastrar-se</Link></p>
      </LoginStyled>
    
  );
};

export default Login;