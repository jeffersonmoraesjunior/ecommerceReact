import React from 'react';
import Produtos from '../../components/Produtos/produtos';
import Navbar from '../../components/Navbar/Navbar';
import FooterContainer from '../../components/Footer/index';

export default function ProdutosAll() {

    document.title = 'Products | Serracommerce';

    return (
        <>
            <Navbar />
            <Produtos />
            <FooterContainer />
        </>
    );
}
