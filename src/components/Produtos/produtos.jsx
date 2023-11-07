import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaRegBookmark, FaFireAlt } from 'react-icons/fa';
import api from '../../services/api';
import './produtos.css';
import { Link } from 'react-router-dom';
import FooterContainer from '../Footer/index';
import Navbar from '../Navbar/Navbar';

const Produtos = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Número de produtos por página

    const handleProdutos = async () => {
        try {
            const response = await api.get('/products');
            setProducts(response.data);
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

    document.title = 'Products | Serracommerce';

    return (
        <>
            <Navbar />
            <div className="Produtos">
                {productsToDisplay.map((product) => (
                    <div className="productList" key={product.id}>
                        <div key={product.id} className="productCard">
                            <FaShoppingCart className={'productCard__cart'} />
                            <FaRegBookmark className={'productCard__wishlist'} />
                            <FaFireAlt className={'productCard__fastSelling'} />

                            <img src={product.image} alt="" className="productImage" />

                            <div className="productCart__content">
                                <h3 className="productName">{product.title.substring(0, 20)}</h3>

                                <div className="displayStack__1">
                                    <div className="productPrice">${product.price}</div>
                                </div>
                                <div className="displayStack__2">
                                    <div className="productRating">
                                        ⭐{product.rating.rate} ({product.rating.count})
                                    </div>
                                    <Link to={`/products/${product.id}`} className="btn_comprar">
                                        Buy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Botões de navegação para ir para a página anterior ou próxima */}
            <div className="buttonPages">
                <>
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}>
                        Previous Page
                    </button>
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={endIndex >= products.length}>
                        Next Page
                    </button>
                </>
            </div>
            <FooterContainer />
        </>
    );
};

export default Produtos;
