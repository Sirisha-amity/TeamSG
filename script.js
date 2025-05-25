const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

let products = [
    { id: 1, name: 'Laptop Pro', quantity: 15, price: 1200.00, category: 'Electronics' },
    { id: 2, name: 'Mechanical Keyboard', quantity: 50, price: 95.00, category: 'Peripherals' },
    { id: 3, name: 'Ergonomic Mouse', quantity: 30, price: 45.00, category: 'Peripherals' }
];
let nextProductId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;

// Get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Add a new product
app.post('/api/products', (req, res) => {
    const { name, quantity, price, category } = req.body;

    if (!name || !quantity || !price || !category) {
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

// Update an existing product by ID
app.put('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, quantity, price, category } = req.body;

    const productIndex = products.findIndex(p => p.id === productId);

    if (productIndex !== -1) {
        products[productIndex] = {
            ...products[productIndex], // Keep existing properties
            name: name || products[productIndex].name,
            quantity: quantity !== undefined ? parseInt(quantity) : products[productIndex].quantity,
            price: price !== undefined ? parseFloat(price) : products[productIndex].price,
            category: category || products[productIndex].category
        };
        res.status(200).json(products[productIndex]);
    } else {
        res.status(404).json({ message: 'Product not found.' });
    }
});

// Delete a product by ID
app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const initialLength = products.length;
    products = products.filter(p => p.id !== productId);

    if (products.length < initialLength) {
        res.status(200).json({ message: 'Product deleted successfully.' });
    } else {
        res.status(404).json({ message: 'Product not found.' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
