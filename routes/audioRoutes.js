const express = require('express');
const multer = require('multer');
const RssFeed = require('../rss');
const ensureLoggedIn = require('../middleware/auth');
const Audio = require('../models/audio');
const router = new express.Router();

router.get('/:file', async (req, res, next) => {
    try {
        const { file } = req.params;
        const fileStream = await Audio.getFromBlobStorage(file);

        const range = req.headers.range;
        const parts = range.replace(/bytes=/, '').split('-');
        const partialStart = parts[0];
        const partialEnd = parts[1];

        const start = parseInt(partialStart, 10);
        const end = partialEnd ? parseInt(partialEnd, 10) : fileStream.end
        const total = fileStream.end + 1;
        const chunksize = (end - start) + 1;
        fileStream.end = end;
        fileStream.start = start;

        res.writeHead(206, {
            'Content-Range': `bytes ${start}-${end}/${total}`,
            'Accept-Ranges': 'bytes', 'Content-Length': chunksize,
            'Content-Type': 'audio/mpeg'
        });
        return fileStream.pipe(res);
    } catch (err) {
        return next(err);
    }
});

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'audio/mpeg') cb(null, true);
        else {
            cb(null, false);
            return cb(new Error('Only .mp3 files allowed'));
        }
    }
});

router.post('/upload', upload.single('audio'), async (req, res, next) => {
    try {
        const { originalname, size } = req.file;
        await Audio.uploadToBlobStorage(req.file);
        return res.json({
            message: 'success',
            filename: originalname,
            length: size
        });
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