const express = require('express');
const fs = require('fs');
const multer = require('multer');
const RssFeed = require('../rss');
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
})

router.post('/upload', upload.single('audio'), (req, res, next) => {
    try {
        const { episodeNum, guests, topic, description } = req.body;
        const { filename, size } = req.file;
        const fileExists = RssFeed.findFile(filename);
        if (!fileExists) RssFeed.addToFeed(filename, episodeNum, guests, topic, description, size);
        return res.json(fileExists);
    } catch (err) {
        return next(err);
    }
});

module.exports = router;