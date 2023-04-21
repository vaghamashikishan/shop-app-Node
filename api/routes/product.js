const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Product = require("../models/product");

router.get("/", (req, res) => {
    Product.find()
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
});

router.post("/", (req, res) => {
    // creating new instance of Mongoose model
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
    });

    // .save() is mongoose method which stores the data on MongoDB
    product
        .save()
        .then((result) => {
            console.log(result);
            res.status(201).json({
                msg: "Product created successfully!!",
                createdProduct: product,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.get("/:productID", (req, res) => {
    const id = req.params.productID;

    Product.findById(id)
        .exec()
        .then((product) => {
            console.log(product);
            if (!!product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({
                    message: "No product found for provided id.",
                });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.patch("/:productID", (req, res) => {
    const id = req.params.productID;
    const updatedproduct = {};
    for (const data in req.body) {
        updatedproduct[data] = req.body[data];
    }

    Product.findByIdAndUpdate({ _id: id }, { $set: updatedproduct })
        .exec()
        .then((result) => {
            if (!!result) {
                res.status(200).json({ message: "Product updated" });
            } else {
                res.status(404).json({ message: "Product not found" });
            }
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
});

router.delete("/:productID", (req, res) => {
    const id = req.params.productID;
    Product.findByIdAndRemove({ _id: id })
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
});

module.exports = router;
