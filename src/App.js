import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Container from './components/Navbar/Container';

function App() {
    return (
        <>
        <BrowserRouter>
            <Navbar/>
        </BrowserRouter>
        </>
    );

}

export default App;
