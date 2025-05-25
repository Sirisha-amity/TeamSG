#TeamSG
# Smart Inventory Tracker

This repository contains the source code for a *Smart Inventory Tracker*, a web-based system designed to help small to medium-sized businesses streamline their supply chain operations. It enables users to manage products, monitor stock levels, track supplier information, and automate reorder alerts.

---

## Features

* *Product Management*: Add, edit, and remove product entries, tracking quantity, price, and category.
* *Inventory Tracking*: Get real-time visibility into stock levels with automated low-stock alerts.
* *Supplier Database*: Manage supplier details and link them to specific products (conceptual linking for now).
* *Order Management*: A placeholder section for future development of recording and monitoring product orders and deliveries.
* *Notifications*: Basic automated alerts for low inventory displayed directly on the dashboard.
* *Data Persistence*: Product and supplier data is saved to local JSON files, so your information remains even after the server restarts.

---

## Technologies Used

* *Frontend*: HTML, CSS, JavaScript
* *Backend*: Node.js with Express.js
* *Database*: File-based JSON storage (for demonstration purposes; a production application would typically use a dedicated database like MySQL or MongoDB)

---

## Getting Started

Follow these simple steps to set up and run the project on your local machine.

### Prerequisites

You'll need the following installed:

* *Node.js*: [Download & Install Node.js](https://nodejs.org/en/download/) (includes npm)

### Installation

1.  *Clone the repository*:
    bash
    git clone <repository_url>
    cd smart-inventory-tracker
    
    (Replace <repository_url> with the actual URL of your Git repository.)
2.  *Install Node.js dependencies*:
    bash
    npm install
    

### Running the Application

1.  *Start the Node.js server*:
    bash
    node server.js
    
    You should see a confirmation message in your terminal, typically indicating the server is running on http://localhost:3000.
2.  *Open in your browser*:
    Navigate to http://localhost:3000 in your web browser to access the application.

---

## Project Structure

* index.html: The core HTML file for the frontend user interface.
* style.css: Contains all the styling for the web application.
* script.js: Frontend JavaScript, handling API interactions and dynamic UI updates.
* server.js: The Node.js backend server, managing API requests and serving static files.
* products.json: (Generated automatically) Stores your product data.
* suppliers.json: (Generated automatically) Stores your supplier data.
* package.json: Defines project metadata and dependencies.
* package-lock.json: Records the exact versions of installed dependencies.

---

## API Endpoints

The backend provides the following RESTful API endpoints:

### Products

* GET /api/products: Retrieve all product entries.
* POST /api/products: Add a new product.
    * *Body*: { "name": "string", "quantity": "number", "price": "number", "category": "string" }
* PUT /api/products/:id: Update an existing product by its ID.
    * *Body*: { "name": "string", "quantity": "number", "price": "number", "category": "string" } (supports partial updates)
* DELETE /api/products/:id: Delete a product by its ID.

### Suppliers

* GET /api/suppliers: Retrieve all supplier entries.
* POST /api/suppliers: Add a new supplier.
    * *Body*: { "name": "string", "contactPerson": "string", "phone": "string", "email": "string" }
* DELETE /api/suppliers/:id: Delete a supplier by its ID.

---

## Future Enhancements

This project serves as a solid foundation. Here are some key areas for improvement to evolve it into a robust, production-ready system:

* *Dedicated Database Integration*: Transition from file-based JSON storage to a powerful database (like MySQL, PostgreSQL, or MongoDB) for enhanced scalability, data integrity, and complex querying.
* *Comprehensive Order Management*: Develop full CRUD (Create, Read, Update, Delete) operations for orders, including seamless linking to products and suppliers, dynamic order status updates, and tracking capabilities.
* *User Authentication & Roles*: Implement a secure system for user registration, login, and role-based access control (e.g., administrator, inventory manager) to manage permissions effectively.
* *Advanced Notification System*: Integrate with email services to send automated low-stock alerts, order confirmations, and other critical business notifications.
* *Enhanced UI/UX*: Consider migrating to a modern frontend framework (such as React, Vue.js, or Angular) to build a more interactive, responsive, and scalable user interface.
* *Search, Filtering, and Sorting*: Add advanced functionality to easily search, filter, and sort products, suppliers, and orders, improving data accessibility.
* *Reporting and Analytics*: Develop intuitive dashboards and generate detailed reports to visualize inventory trends, track key performance indicators, and gain actionable insights.
* *Robust Error Handling and Validation*: Implement more comprehensive server-side and client-side input validation, along with robust error handling mechanisms, to ensure data integrity and application stability.
*
