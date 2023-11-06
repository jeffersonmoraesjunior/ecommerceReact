import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';

const Produto = () => {
    const { id } = useParams(useState);
    const [product, setProduct] = useState([]);
    const [loading, setLoanding] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const reponse = await api.get(`/products/${id}`);
                const data = await reponse.json;
                setProduct(data);

                //buscar os produtos por categorias
                const response2 = await api.get(`/products/category/${data.category}`);
                const data2 = await response2.json;
                setProduct(data2); //retorna a busca
            } catch (error) {
                console.log(error);
            }
        };

        getProduct();
    }, [id]);

    return (
        <>
            <div className="container">
                {product.map((product) => (
                    <div className="row">
                        <div className="imagem">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="product__image"
                            />
                        </div>

                        <div className="product__content">
                            <h4 className="product__category">{product.category}</h4>
                            <h1 className="product__title">{product.title}</h1>
                            <p className="lead">
                                {product.rating && product.rating.rate}{' '}
                                <i className="fa fa-star"></i>
                            </p>
                            <h3 className="product__price">${product.price}</h3>
                            <p className="lead">{product.description}</p>
                            <Link to={`/products/${id}`} className="btn__carrinho">
                                Go To Cart
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Produto;
