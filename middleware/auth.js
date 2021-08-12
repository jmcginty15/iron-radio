const { User } = require('../models/user');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../models/user');

const ensureLoggedIn = async (req, res, next) => {
    /** Throws an error if no token is sent with the request */
    try {
        const token = req.body._token;
        const user = token ? jwt.verify(token, SECRET_KEY) : null;
        const userVerification = await User.find(user.username);
        if (userVerification) return next();
        throw new Error('Unauthorized');
    } catch (err) {
        return next(err);
    }
}

module.exports = ensureLoggedIn;