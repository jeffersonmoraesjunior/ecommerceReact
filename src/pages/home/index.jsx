import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Container from '../../components/Navbar/Container';
import FooterContainer from '../../components/Footer/index';
import Carousel from '../../components/Carousel/carousel';
import Produtos from '../../components/Produtos/produtos';


function Home() {
    
    document.title = 'Home | Serracommerce';
    
    return (
        <>
            <Navbar />
            <Container>
                <Carousel />
                <Outlet />
                <Produtos />
            </Container>
            <FooterContainer />
        </>
    );
}

export default Home;
