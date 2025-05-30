const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

let products = [
  { id: 1, name: 'Laptop Pro', quantity: 15, price: 1200.00, category: 'Electronics' },
  { id: 2, name: 'Mechanical Keyboard', quantity: 50, price: 95.00, category: 'Peripherals' },
  { id: 3, name: 'Ergonomic Mouse', quantity: 30, price: 45.00, category: 'Peripherals' },
];

let nextProductId = Math.max(...products.map(p => p.id)) + 1;

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Add a product
app.post('/api/products', (req, res) => {
  const { name, quantity, price, category } = req.body;

  if (!name || quantity == null || price == null || !category) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const newProduct = {
    id: nextProductId++,
    name,
    quantity: parseInt(quantity),
    price: parseFloat(price),
    category
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Update a product
app.put('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const { name, quantity, price, category } = req.body;

  const index = products.findIndex(p => p.id === productId);
  if (index === -1) return res.status(404).json({ message: 'Product not found.' });

  products[index] = {
    ...products[index],
    name: name ?? products[index].name,
    quantity: quantity !== undefined ? parseInt(quantity) : products[index].quantity,
    price: price !== undefined ? parseFloat(price) : products[index].price,
    category: category ?? products[index].category,
  };

  res.json(products[index]);
});

// Delete a product
app.delete('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const initialLength = products.length;
  products = products.filter(p => p.id !== productId);

  if (products.length < initialLength) {
    res.json({ message: 'Product deleted successfully.' });
  } else {
    res.status(404).json({ message: 'Product not found.' });
  }
});

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(🚀 Server running at http://localhost:${PORT});
});
