import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ProductListPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `/api/products?category=${category}`
            : '/api/products'
        );
        setProducts(res.data.data); // Assuming your API returns { data: [...] }
      } catch (err) {
        console.error('Error fetching products:', err.message);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div>
      <h2>Showing products for: {category || 'All'}</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;


===============================================================================================
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();
const PORT = 3000;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once('open', () => console.log('Connected to MongoDB'));

// Define a Mongoose schema
const MyDataSchema = new mongoose.Schema({}, { strict: false });
const MyData = mongoose.model('MyData', MyDataSchema);

// Endpoint to import JSON from URL
app.get('/import-json', async (req, res) => {
  const jsonUrl = req.query.url; // example: http://example.com/data.json

  if (!jsonUrl) return res.status(400).send('Please provide a URL query param');

  try {
    const response = await axios.get(jsonUrl);

    const data = response.data;

    // Handle array or single object
    const result = Array.isArray(data)
      ? await MyData.insertMany(data)
      : await MyData.create(data);

    res.json({ message: 'Data imported successfully', inserted: result.length || 1 });
  } catch (error) {
    console.error('Error importing JSON:', error.message);
    res.status(500).send('Error fetching or inserting JSON');
  }
});

app.listen(PORT, () => {
  console.log(Server running at http://localhost:${PORT});
});
