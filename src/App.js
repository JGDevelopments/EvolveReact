import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponenet from './components/Navbar';
import {Container} from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Store from './pages/Store'
import Cancel from './pages/Cancel'
import Success from './pages/Success'
import {CartProvider} from "./CartContext";

function App() {
    return (

        <CartProvider>
            <Container>
                <NavbarComponenet></NavbarComponenet>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Store/>}/> {/*These are called pages */}
                        <Route path="success" element={<Success/>}/>
                        <Route path="cancel" element={<Cancel/>}/>
                    </Routes>
                </BrowserRouter>
            </Container>
        </CartProvider>
    );
}

export default App;
  