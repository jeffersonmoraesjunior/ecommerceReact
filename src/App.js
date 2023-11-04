import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Navbar/Container';
import FooterContainer from './components/Footer/index';

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
