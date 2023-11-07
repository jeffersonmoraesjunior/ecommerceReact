// import { BrowserRouter } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import FooterContainer from './components/Footer/index';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { WhatsApp } from './components/ButtonWhatsApp/WhatsApp';


export default function App() {
    return (
        <>
            <Outlet />
            <WhatsApp />
        </>
    );
}