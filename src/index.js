import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <GlobalStyle />
        

        <RouterProvider router={router} />
      

    </React.StrictMode>
);
