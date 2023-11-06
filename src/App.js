import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import FooterContainer from './components/Footer/index';
import Container from './components/Navbar/Container';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <FooterContainer />
            </BrowserRouter>
        </>
    );
}

export default App;
