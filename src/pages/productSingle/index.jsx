import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import api from '../../services/api';
import apiCart from '../../services/apiCart';

import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import FooterContainer from '../../components/Footer/index';

const Produto = () => {
    const { id } = useParams(useState);
    const [product, setProduct] = useState([]);

    // const [state, setState] = useState({
    //     api: api,
    //     cart: []
    // });

    // const increase = (produto) => {
    //     setState({
    //         ...state,
    //         cart: state.cart.map((cartItem) =>
    //             cartItem.id === produto.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
    //         )
    //     });
    // };

    // const decrease = (produto) => {
    //     setState({
    //         ...state,
    //         cart: state.cart.map((cartItem) =>
    //             cartItem.id === produto.id
    //                 ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
    //                 : cartItem
    //         )
    //     });
    // };

    // const removeItem = (id) => {
    //     setState({
    //         ...state,
    //         cart: state.cart.filter((cartItem) => cartItem.id !== id)
    //     });
    // };

    const salvarProduct = async (data) => {
        try {
            const response = await apiCart.post('/cart', data);
            console.log(response); // 'data' contém os dados que você deseja enviar no corpo da solicitação.
            return response.data;
        } catch (error) {
            // Lidar com erros, se necessário.
            console.error(error);
            throw error;
        }
    };

    //calcula o numero total de itens no carrinho de compras
    // const cartItemCount = state.cart.reduce((acc, data) => (acc += data.count), 0);

    useEffect(() => {
        const getProduct = async () => {
            try {
                // console.log(`/products/${id}`)
                const reponse = await api.get(`/products/${id}`);
                // const data = await reponse.json();
                setProduct(reponse.data);
                // console.log(reponse.data);
            } catch (error) {
                console.log(error);
            }
        };

        getProduct();
    }, [id]);

    document.title = 'Item | Serracommerce';

    return (
        <>
            <Navbar />
            <div className="container">
                <div key={product.id} className="row">
                    <div className="imagem">
                        <img className="product__image" src={product.image} alt={product.title} />
                    </div>

                    <div className="product__content">
                        <h4 className="product__category">
                            {product ? product?.category?.toUpperCase() : null}
                        </h4>
                        <h1 className="product__title">{product.title}</h1>
                        <p className="lead">⭐{product.rating && product.rating.rate} Avaliações</p>
                        <h3 className="product__price">R$ {product.price}</h3>
                        <p className="lead">{product.description}</p>
                        <button
                            onClick={() => {
                                salvarProduct(product);
                                alert('Product Added');
                            }}
                            className="btn_compra btn_add_carrinho">
                            Add to Cart
                        </button>
                        <Link to={`/cart`} className="btn_compra">
                            Go to Cart
                        </Link>
                    </div>
                </div>
            </div>
            <FooterContainer />
        </>
    );
};

export default Produto;
