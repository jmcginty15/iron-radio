const express = require('express');
const path = require('path');
const router = new express.Router();

router.get('/rss', (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, '../rss.xml'));
    } catch (err) {
        return next(err);
    }
});

module.exports = router;