import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import Container from '../../components/Navbar/Container';
import FooterContainer from '../../components/Footer/index';

export default function Home() {
    document.title = 'Home | Serracommerce'
    return (
        <>
            <Navbar/>
            <Container>
            <Outlet/>
            </Container>
            <FooterContainer />
        </>
    );
}