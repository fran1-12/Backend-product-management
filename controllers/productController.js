const ProductModel = require('../models/productModel');


exports.getAllProducts = (req, res) => {
    try {
        const products = ProductModel.getAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
};

exports.getProductById = (req, res) => {
    try {
        const productId = parseInt(req.params.id);  // Asegura que el ID es un número
        if (isNaN(productId)) {
            return res.status(400).json({ message: 'Invalid product ID' });
        }

        const product = ProductModel.getById(productId);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error: error.message });
    }
};

exports.addProduct = (req, res) => {
    try {
        const newProduct = req.body;

        // Validación básica de los campos requeridos
        if (!newProduct.name) {
            return res.status(400).json({ message: 'Product name is required' });
        }

        ProductModel.add(newProduct);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error: error.message });
    }
};

exports.updateProduct = (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const updatedProduct = req.body;

        if (isNaN(productId)) {
            return res.status(400).json({ message: 'Invalid product ID' });
        }

        // Validación básica
        if (!updatedProduct.name) {
            return res.status(400).json({ message: 'Product name is required' });
        }

        const product = ProductModel.getById(productId);
        if (product) {
            ProductModel.update(productId, updatedProduct);
            res.json({ message: 'Product updated', updatedProduct });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error: error.message });
    }
};

exports.deleteProduct = (req, res) => {
    try {
        const productId = parseInt(req.params.id);

        if (isNaN(productId)) {
            return res.status(400).json({ message: 'Invalid product ID' });
        }

        const product = ProductModel.getById(productId);
        if (product) {
            ProductModel.delete(productId);
            res.json({ message: 'Product deleted' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
};
