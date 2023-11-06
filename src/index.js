import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login';
import CreateUser from './pages/cadastro';
import Home from './pages/home/index';
import Produtos from './components/Produtos/produtos';
import Product from './pages/product/index';
import ErrorPage from './pages/Error';
import About from './pages/about/about'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/sign-up',
                element: <CreateUser />,
                errorElement: <ErrorPage />
            },
            {
                path: '/sign-in',
                element: <Login />
            },
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/products',
                element: <Produtos />
            },
            {
                path: '/products/id',
                element: <Product />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    },
    {
        path: '/home',
        element: <Home />,
        children: []
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <RouterProvider router={router} />
    </React.StrictMode>
);
