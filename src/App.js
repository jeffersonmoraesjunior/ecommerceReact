import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/body';
// import Container from './components/Navbar/Container';
import FooterContainer from './components/Footer/index';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <hr />
                <Body />
                <hr />
                <FooterContainer />
            </BrowserRouter>
        </>
    );
}

export default App;
