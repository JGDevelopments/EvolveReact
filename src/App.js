
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponenet from './components/Navbar';
import { Container } from 'react-bootstrap';
import {BroswerRouter, Routes, Route} from "react-router-dom";

function App() {
  return (

    <Container>
    <NavbarComponenet></NavbarComponenet>
    <BroswerRouter>
      <Routes>
         <Route index element={<Store />}/>
         <Route path="success" element={<Success />}/>
      </Routes>
    </BroswerRouter>
    </Container>
  );
}

export default App;
  