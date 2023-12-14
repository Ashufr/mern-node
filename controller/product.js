const fs = require("fs");
const model = require("../model/product");
const mongoose = require("mongoose");
const Product = model.productModel;

// Create
exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        console.log(error);
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

exports.getProduct = async (req, res) => {
    const id = req.params.id;
    console.log({ id });
    try {
        const product = await Product.findById(id);
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};
exports.replaceProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
            new: true,
        });
        res.status(201).json(doc);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};
exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {
            new: true,
        });
        res.status(201).json(doc);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};
exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndDelete({ _id: id });
        res.status(201).json(doc);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};
