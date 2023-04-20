const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ msg: "This is products GET method!!" })
})

router.post('/', (req, res) => {
    res.status(201).json({ msg: "This is products POST method!!" })
})

router.get('/:productID', (req, res) => {
    const id = req.params.productID;
    if (!!id) {
        res.status(200).json(`You entered this ${id}.`);
    }
})

router.patch('/:productID', (req, res) => {
    const id = req.params.productID;
    if (!!id) {
        res.status(200).json(`You entered this ${id} for updation`);
    }
})
router.delete('/:productID', (req, res) => {
    const id = req.params.productID;
    if (!!id) {
        res.status(200).json(`You entered this ${id} for deletion.`);
    }
})

module.exports = router;