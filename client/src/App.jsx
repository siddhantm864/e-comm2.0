// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Add } from "@mui/icons-material";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Product from "./pages/product";
import ProductList from "./pages/productList";
import Profile from "./pages/profile";
import Address from "./components/address";
import Login from "./pages/login";
import Register from "./pages/register";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/address" element={<Address />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
