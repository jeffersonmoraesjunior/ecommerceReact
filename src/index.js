import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< HEAD
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
=======
import GlobalStyle from './styles'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './page/login';
import CreateUser from './page/cadastro';
import Home from './page/home/index';
import Produtos from './components/Produtos/produtos';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children:[
        {
          path: "/cadastro",
          element: <CreateUser />
        
        },
        {
          path: "/",
          element: <Login />
        }
    ]
    },
    {
      path: '/home',
      element: <Home />,
      children:[
        {
          path: "/home/products",
          element: <Produtos />
        }
      ]
    },
  ]);

// >>>>>>> Stashed changes
>>>>>>> 98e7ada9eb13af70c9e95ddfcae66f794c668faa

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <GlobalStyle />
<<<<<<< HEAD
        <RouterProvider router={router} />
=======
        

        <RouterProvider router={router} />
      

>>>>>>> 98e7ada9eb13af70c9e95ddfcae66f794c668faa
    </React.StrictMode>
);
