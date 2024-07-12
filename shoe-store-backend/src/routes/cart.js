const express = require('express');
const router = express.Router();

let cart = [];

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

// Get cart items
router.get('/cart', (req, res) => {
  res.json(cart);
});

// Add item to cart
router.post('/cart', (req, res) => {
  const { id, quantity } = req.body;
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).send('Product not found');

  const item = { ...product, quantity };
  cart.push(item);
  res.status(201).json(item);
});

// Remove item from cart
router.delete('/cart/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  cart = cart.filter(item => item.id !== productId);
  res.status(204).send();
});

module.exports = router;
