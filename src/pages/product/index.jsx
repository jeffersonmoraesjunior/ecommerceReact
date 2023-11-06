import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import Navbar from '../../components/Navbar/Navbar';
import FooterContainer from '../../components/Footer/index';

const Produto = () => {
    const { id } = useParams(useState);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            try {
                // console.log(`/products/${id}`)
                const reponse = await api.get(`/products/${id}`);
                // const data = await reponse.json();
                setProduct(reponse.data);
                console.log(reponse.data);
            } catch (error) {
                console.log(error);
            }
        };

        getProduct();
    }, [id]);

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
                        <p className="lead">
                            {product.rating && product.rating.rate} <i className="fa fa-star"></i>
                        </p>
                        <h3 className="product__price">${product.price}</h3>
                        <p className="lead">{product.description}</p>
                        <Link to={`/products/${id}`} className="btn_compra">
                            Comprar
                        </Link>
                    </div>
                </div>
            </div>
            <FooterContainer />
        </>
    );
};

export default Produto;
