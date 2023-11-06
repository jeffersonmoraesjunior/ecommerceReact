import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';
import api from '../../services/api';
import './body.css'

const Body = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Número de produtos por página

    const handleProdutos = async () => {
        try {
            const response = await api.get('/products');
            setProducts(response.data);
            console.log(response.data); //puxa os arrays no console
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleProdutos();
    }, []);

    // Lógica de cálculo para determinar os índices de início e fim da página atual
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Filtra os produtos para exibir apenas os da página atual
    const productsToDisplay = products.slice(startIndex, endIndex);

    return (
        <>
            {productsToDisplay.map((product) => (
                <div key={product.id} className='products'>
                    <p className='productTitle'>{product.title}</p>
                    <p className='productPrice'>${product.price}</p>
                    <p className='productRating'>⭐{product.rating.rate} ({product.rating.count})</p>
                    <img src={product.image} alt='' className='productImage'></img>
                </div>
            ))}
            {/* <div className="produtoLista">
                <div key={api.id} className="produtoCard">
                    <img src={api.image} alt="produto imagem" className="produtoImagem"></img>
                </div>
            </div> */}
            {/* Botões de navegação para ir para a página anterior ou próxima */}
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                Previous Page
            </button>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={endIndex >= products.length}>
                Next Page
            </button>
        </>
    );
};

export default Body;