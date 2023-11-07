import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FooterContainer from '../../components/Footer/index';
import { Link } from 'react-router-dom';
import '../../pages/carrinho/styles.css';
import apiCart from '../../services/apiCart';

document.title = 'Cart | Serracommerce'

const Cart = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const handleProdutos = async () => {
            try {
                const response = await apiCart.get('/cart');
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        handleProdutos();
    }, []);

    // Agrupa os produtos por id
    const groupedProducts = products.reduce((acc, product) => {
        acc[product.id] = acc[product.id] || { ...product, quantity: 0};
        acc[product.id].quantity += 1;
        return acc;
    }, {});

    // ele acaba convertendo o objeto de volta para um array
    const productList = Object.values(groupedProducts);

    const totalPrice = productList.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );
    const shipping = 40; // valor do frete
    const totalAmount = totalPrice + shipping;

    const removeProduct = async (id) => {
        try {
            const response = await apiCart.delete(`/cart/${id}`);
            console.log(response); // 'id' é o identificador do produto que você deseja deletar.
            window.location.reload();
            return response.data;
        } catch (error) {
            // Lidar com erros, se necessário.
            console.error(error);
            throw error;
        }

        // document.getElementById('algumacoisa').addEventListener('click', function(){
        // });
    };

    return (
        <>
            <Navbar />
            <div className="text-main">
                <div className="text-center">Cart</div>
                <hr />
            </div>
            <div className="container">
                <section className="section_cart">
                    <div className="row">
                        <div className="column-product">
                            <div className="card">
                                <div className="card-header">Items List</div>
                                <hr />
                                {productList.map((product) => (
                                    <div className="card-body" key={product.id}>
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="product_image"
                                        />
                                        <p className="productName">
                                            {product.title.substring(0, 30)}...
                                        </p>
                                        <p className="productQuantity">
                                            Quantity: {product.quantity}
                                        </p>
                                        <button type="" id="algumacoisa">
                                            <Link
                                                to="/cart"
                                                onClick={() => removeProduct(product.id)}
                                                className="btn-remove">
                                                Product Remove
                                            </Link>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="column-order-summary">
                            <div className="card-summary card">
                                <div className="card-header">Order Summary</div>
                                <hr />
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <p>Products Quantity: </p>
                                            <span>
                                                ({productList.reduce(
                                                    (total, product) => total + product.quantity,
                                                    0
                                                )})
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            <p>Shipping</p>
                                            <span>${shipping.toFixed(2)}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <div>
                                                <strong>Total</strong>
                                            </div>
                                            <span>${totalAmount.toFixed(2)}</span>
                                        </li>
                                    </ul>
                                </div>
                                <button onClick={() => {}} className="btn-checkout">
                                    Finish Buy
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <FooterContainer />
        </>
    );
};

export default Cart;
