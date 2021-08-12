const express = require('express');
const fs = require('fs');
const multer = require('multer');
const RssFeed = require('../rss');
const ensureLoggedIn = require('../middleware/auth');
const router = new express.Router();

router.get('/:file', (req, res, next) => {
    try {
        const { file } = req.params;
        let path = `${__dirname}/audio/${file}`;
        if (!fs.existsSync(path)) path = `E:\\iron-radio-audio/${file}`;
        res.sendFile(path);
    } catch (err) {
        return next(err);
    }
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './audio/'),
    filename: (req, file, cb) => cb(null, file.originalname.split(' ').join('-'))
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'audio/mpeg') cb(null, true);
        else {
            cb(null, false);
            return cb(new Error('Only .mp3 files allowed'));
        }
    }
}).single('audio');

router.post('/upload', (req, res, next) => {
    try {
        upload(req, res, (err) => {
            const { filename, size } = req.file;
            if (err) return next(err);
            return res.json({
                message: 'success',
                filename: filename,
                length: size
            });
        })
    } catch (err) {
        return next(err);
    }
});

router.post('/add-to-rss', ensureLoggedIn, (req, res, next) => {
    try {
        const { episodeNum, guests, topic, description, filename, length } = req.body;
        const alreadyExists = RssFeed.findFile(filename);
        if (!alreadyExists) {
            RssFeed.addToFeed(filename, episodeNum, guests, topic, description, length);
            return res.json({ message: 'success' });
        }
        return res.json({ message: 'episode already exists' });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;