import Product from "../models/mongo/product.model.js";

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "error while fetching product",
      });
    }
    res.status(200).json({
      success: true,
      dat: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "server error",
      error: err.message,
    });
  }
};

const getProductByCategory = async (req, res) => {
  const categoryName = req.query.category;
  const newProduct = req.query.new;
  try {
    let products;
    if (newProduct) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (categoryName) {
      products = await Product.find({
        categories: { $in: [categoryName.toLowerCase()] },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error fetching data",
      error: error.message,
    });
  }
};

export default { getProductById, getProductByCategory };
