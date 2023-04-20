const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ msg: "This is orders GET method!!" });
});

router.post("/", (req, res) => {
    const order = {
        productID: req.body.productID,
        quantity: req.body.quantity,
    };
    res.status(201).json({
        msg: "This is orders POST method!!",
        createdOrder: order,
    });
});

router.get("/:orderID", (req, res) => {
    const id = req.params.orderID;
    if (!!id) {
        res.status(200).json(`You entered this ${id}.`);
    }
});

router.patch("/:orderID", (req, res) => {
    const id = req.params.orderID;
    if (!!id) {
        res.status(200).json(`You entered this ${id} for updation`);
    }
});
router.delete("/:orderID", (req, res) => {
    const id = req.params.orderID;
    if (!!id) {
        res.status(200).json(`You entered this ${id} for deletion.`);
    }
});

module.exports = router;
