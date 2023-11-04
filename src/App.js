import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Navbar/Footer'
import Container from './components/Navbar/Container';
import { Fragment } from 'react';

function App() {
    return (
        <>
        <BrowserRouter>
            <Navbar/>
        </BrowserRouter>

        <br/>
        <br/>
        <br/>
        <br/>

        <Footer/>
        </>
    );

}

export default App;
