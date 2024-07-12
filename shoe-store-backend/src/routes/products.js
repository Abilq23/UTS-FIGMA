const express = require('express');
const router = express.Router();

const products = [
  {
    id: 1,
    name: "Compass Gazelle Low",
    price: 568,
    image: "/images/compass-gazelle-low.png",
    description: "Gazelle Low dirancang dengan sentuhan vintage klasik yang dipadukan dengan kenyamanan modern."
  },
  {
    id: 2,
    name: "Aerostreet Vintage Cream",
    price: 198,
    image: "/images/aerostreet-vintage-cream.png",
    description: "Sepatu dengan gaya vintage yang nyaman dan tahan lama."
  }
];

// Get all products
router.get('/products', (req, res) => {
  res.json(products);
});

// Get product by ID
router.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

module.exports = router;
