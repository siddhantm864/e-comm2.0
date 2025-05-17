// import './App.css';
import Cart from "./pages/cart";
import Home from "./pages/home";
import Product from "./pages/product";
import ProductList from "./pages/productList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";
import { Add } from "@mui/icons-material";
import Address from "./components/address";
import Login from "./pages/login";
import Register from "./pages/register";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/address" element={<Address />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
