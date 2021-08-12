const express = require('express');
const { User } = require('../models/user');
const router = new express.Router();

router.post('/login', async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const token = await User.login(username, password);
        return res.json({ username: username, _token: token });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;