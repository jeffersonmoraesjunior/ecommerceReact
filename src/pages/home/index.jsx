import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Container from '../../components/Navbar/Container';
import FooterContainer from '../../components/Footer/index';
// import Carousel from '../../components/Carousel/carousel'

document.title = 'Home | Serracommerce'

export default function Home() {

    return (
        <>
            <Navbar />
            {/* <Carousel/> */}
            <Container>
                <Outlet />
            </Container>
            <FooterContainer />
        </>
    );
}