document.addEventListener('DOMContentLoaded', () => {
    const addProductForm = document.getElementById('add-product-form');
    const productTableBody = document.getElementById('product-table-body');

    // In-memory array to store products
    let products = [];

    // Function to render products in the table
    function renderProducts() {
        productTableBody.innerHTML = ''; // Clear existing rows
        products.forEach(product => {
            const row = productTableBody.insertRow();
            row.insertCell(0).textContent = product.name;
            row.insertCell(1).textContent = product.quantity;
            row.insertCell(2).textContent = `$${product.price.toFixed(2)}`;
            row.insertCell(3).textContent = product.category;
        });
    }

    // Handle form submission
    addProductForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const productName = document.getElementById('productName').value;
        const productQuantity = parseInt(document.getElementById('productQuantity').value);
        const productPrice = parseFloat(document.getElementById('productPrice').value);
        const productCategory = document.getElementById('productCategory').value;

        const newProduct = {
            name: productName,
            quantity: productQuantity,
            price: productPrice,
            category: productCategory
        };

        products.push(newProduct); // Add new product to our array
        renderProducts(); // Re-render the table to show the new product

        // Clear the form fields
        addProductForm.reset();
    });

    // Initial render (if we had any initial products, but for now it's empty)
    renderProducts();
});
