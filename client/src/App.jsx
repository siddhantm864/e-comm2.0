// import './App.css';
import Cart from './pages/cart';
import Home from './pages/home';
import Product from './pages/product';
import ProductList from './pages/productList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App=()=>{
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
