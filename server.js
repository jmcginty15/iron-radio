const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const audioRoutes = require('./routes/audioRoutes');
const imageRoutes = require('./routes/imageRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(cors({ origin: '*' }));

const CLIENT_ROUTES = ['/archive', '/about', '/backend'];
app.use((req, res, next) => {
    if (CLIENT_ROUTES.includes(req.path)) {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        res.sendFile(path.join(__dirname, './client/build', 'index.html'));
    } else {
        next();
    }
});

app.use(express.json());
app.use(express.static(path.join(__dirname, './client/build')));
app.use('/api', apiRoutes);
app.use('/audio', audioRoutes);
app.use('/images', imageRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});