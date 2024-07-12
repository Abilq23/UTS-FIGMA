const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const productsRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

const app = express();

// Middleware untuk logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));  // Middleware untuk melayani file statis

app.use('/api', productsRoutes);
app.use('/api', cartRoutes);

module.exports = app;