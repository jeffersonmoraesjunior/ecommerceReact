import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CadastraStyled } from './style';
import { Link } from 'react-router-dom';
import api, { salvarPessoa, listarPessoa } from '../../services/apiusuario.js';
import Navbar2 from '../../components/Navbar/Navbar2';
import Container from '../../components/Navbar/Container';
import FooterContainer from '../../components/Footer/index';


const Cadastro = () => {

    document.title = 'Sign Up | Serracommerce'
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [produtosSelecionados, setProdutosSelecionados] = useState([]);
    const navigate = useNavigate();

    const handleCadastro = async () => {
        if (!nome) {
            alert('Please fill in the field: "Name"!');
            return;
        }
        
        const response = await listarPessoa(); 
        const userData = response.data; 
      
        const user = userData.find((user) => user.email === email);
      
        if (user && user.email === email) {
          
          alert('Email already exists. Choose another email!');
        } else {
          if (senha !== confirmarSenha) {
            alert('Passwords do not match. Try again!');
          } else {
            
            const novoUsuario = {
              nome,
              email,
              senha,
              produtosSelecionados
            };
            try {
              
              salvarPessoa(novoUsuario);
              
            } catch (error) {
              console.error('Error to save user: ', error);
            }
          }
        }
        alert("Welcome to Serracommerce!")
      };

    const handleAdicionarProduto = (produto) => {
        
        setProdutosSelecionados([...produtosSelecionados, produto]);
    };

    return (
        <>
            <Navbar2 />
            <Container>
                <CadastraStyled>
                    <h1>Sign Up</h1>
                    <form>
                        <input
                            type="text"
                            placeholder="Name"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
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
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            minLength={8}
                            maxLength={14}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                            minLength={8}
                            maxLength={14}
                            required
                        />
                        <button onClick={handleCadastro}>Sign Up</button>
                        <p>
                            Already have an account? <Link to="/sign-in">Back to Sign In</Link>
                        </p>
                    </form>
                </CadastraStyled>
            </Container>
            <FooterContainer />
        </>
    );
};

export default Cadastro;
