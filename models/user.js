const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET_KEY = process.env.SECRET_KEY || 'strengthguild';

class User {
    static async login(username, password) {
        const user = await User.find(username);

        if (user) {
            const authorized = await bcrypt.compare(password, user);
            if (authorized) {
                const payload = { username: username };
                return jwt.sign(payload, SECRET_KEY);
            }
        }

        throw new Error('Unauthorized');
    }

    static async find(username) {
        const adminUsers = JSON.parse(fs.readFileSync(path.join(__dirname, 'auth.json'), 'utf-8'));
        return adminUsers[username];
    }
}

module.exports = { User, SECRET_KEY };