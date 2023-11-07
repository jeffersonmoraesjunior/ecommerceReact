import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import GlobalStyle from './styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login';
import CreateUser from './pages/cadastro';
import Home from './pages/home/index';

import Produtos from './components/Produtos/produtos';
import Product from './pages/productSingle/index';
import Errorpages from './pages/Error';
import About from './pages/about/about';
import { UserProvider } from './context';
import Cart from './pages/carrinho';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,       
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/sign-up',
                element: <CreateUser />
            },
            {
                path: '/sign-in',
                element: <Login />
            },
            {
                path: '/products',
                element: <Produtos />
            },
            {
                path: '/products/:id',
                element: <Product />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/*',
                element: <Errorpages />
            }
        ]
    },
    {
        path: '/',
        element: <Home />,
        children: []
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <UserProvider>
            <GlobalStyle />
            <RouterProvider router={router} />
        </UserProvider>
    </React.StrictMode>
);
