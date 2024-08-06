import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Products from './components/Products';
import Errror from './components/Errror';
import {Routes,Route} from "react-router-dom"
import Product from './screen/Product';

function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Products' element={<Products />} />
      <Route path='/products/:id' element={ <Product />} />
      <Route path='*' element={<Errror />} />
    </Routes>
  </>
  );
}

export default App;
