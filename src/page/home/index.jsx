import { Outlet } from 'react-router-dom';
import NavBar from '../../components/Navbar/Navbar'
import Container from '../../components/Navbar/Container';
import FooterContainer from '../../components/Footer/index';

export default function Home() {
    return (
        <>
                <NavBar/>
                <Container>
                <Outlet/>
                </Container>
                <FooterContainer />
        </>
    );
}