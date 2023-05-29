import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Navbar from './pages/shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<Home />}></Route>
        <Route path='/appointment' element={<Home />}></Route>
      </Routes>

    </div>
  );
}

export default App;
