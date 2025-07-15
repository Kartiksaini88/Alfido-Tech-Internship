
import './App.css';
import Navbar from './Router/navbar';
import { Route, Routes } from 'react-router';
import Men from './Router/About';
import Contact from './Router/Contact';
import Detail from './Router/AboutDetail';
import Home from './Router/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<Men></Men>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/detail/:id' element={<Detail></Detail>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
