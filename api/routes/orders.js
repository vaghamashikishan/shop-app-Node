const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ msg: "This is orders GET method!!" })
})

router.post('/', (req, res) => {
    res.status(201).json({ msg: "This is orders POST method!!" })
})

router.get('/:orderID', (req, res) => {
    const id = req.params.orderID;
    if (!!id) {
        res.status(200).json(`You entered this ${id}.`);
    }
})

router.patch('/:orderID', (req, res) => {
    const id = req.params.orderID;
    if (!!id) {
        res.status(200).json(`You entered this ${id} for updation`);
    }
})
router.delete('/:orderID', (req, res) => {
    const id = req.params.orderID;
    if (!!id) {
        res.status(200).json(`You entered this ${id} for deletion.`);
    }
})

module.exports = router;