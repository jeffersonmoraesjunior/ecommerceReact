import { Outlet } from 'react-router-dom';
import NavBar from '../../components/Navbar/Navbar';
import Container from '../../components/Navbar/Container';
import FooterContainer from '../../components/Footer/index';

// import Carousel from '../../components/Carousel/carousel'

export default function Home() {

    document.title = 'Home | Serracommerce'
    return (
        <>
            <NavBar />
            {/* <Carousel/> */}
            <Container>
                <Outlet />
            </Container>
            <FooterContainer />
        </>
    );
}