const express = require('express');
const path = require('path');
const router = new express.Router();

router.get('/:image', (req, res, next) => {
    try {
        const { image } = req.params;
        res.sendFile(path.join(__dirname, '../images', image));
    } catch (err) {
        return next(err);
    }
});

module.exports = router;