// Cadastro.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CadastraStyled } from './style';
import { Link } from 'react-router-dom';
import api, { salvarPessoa } from '../../services/apiusuario.js';
import Navbar from '../../components/Navbar/Navbar'
import Container from '../../components/Navbar/Container';
import FooterContainer from '../../components/Footer/index';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);
  const navigate = useNavigate();

  const handleCadastro = () => {
    // Aqui, você deve adicionar a lógica para salvar os dados do usuário e os produtos selecionados.
    // Certifique-se de validar os campos e verificar se as senhas coincidem.
    // Isso é apenas um exemplo simplificado.

    if (senha !== confirmarSenha) {
      alert('Passwords do not match. Try again!');
      return;
    }

    // Aqui, você pode enviar os dados do usuário e os produtos selecionados para o servidor ou armazená-los localmente.
    // Exemplo: 
    const novoUsuario = {
      nome,
      email,
      senha,
      produtosSelecionados,
    };
    salvarPessoa(novoUsuario)
    // Redirecione para a página de login ou para onde você desejar após o cadastro.
    navigate('/');
  };

  const handleAdicionarProduto = (produto) => {
    // Aqui, você pode adicionar lógica para adicionar produtos à lista de produtos selecionados.
    setProdutosSelecionados([...produtosSelecionados, produto]);
  };

  document.title = 'Sign Up | Serracommerce'

  return (
    <>
      <Navbar /> {/*mudar para a outra navbar*/}
      <Container>
        <CadastraStyled>
          <h1>Sign Up</h1>
          <input
            type="text"
            placeholder="Name"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
          <button onClick={handleCadastro}>Sign Up</button>
          <p>Already have an account? <Link to="/sign-in">Back to Login</Link></p>
        </CadastraStyled>
      </Container>
      <FooterContainer />
    </>
  );
};

export default Cadastro;