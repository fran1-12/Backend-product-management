const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/products.json');

class ProductModel {
    static getAll() {
        const data = JSON.parse(fs.readFileSync(dataPath));
        return data;
    }

    static getById(id) {
        const products = this.getAll();
        return products.find(p => p.id === id);
    }

    static add(product) {
        const products = this.getAll();
        products.push(product);
        fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
    }

    static update(id, updatedProduct) {
        let products = this.getAll();
        products = products.map(p => (p.id === id ? { ...p, ...updatedProduct } : p));
        fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
    }

    static delete(id) {
        let products = this.getAll();
        products = products.filter(p => p.id !== id);
        fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
    }
}

module.exports = ProductModel;
