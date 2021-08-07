const express = require('express');
const app = express();
const cors = require('cors');
const config = require('config');
const HOST = config.get('host') || process.env.HOST || 'localhost';
const PORT = config.get('port') || process.env.PORT || 5033;

// use cors
app.use(cors());

// log all
app.get('/*', (req, res, next) => {
    console.log(`log: ${req.url}`,res);
    next();
});

// home route
app.get('/', (req, res) => {
    console.log(`Success home page url=: ${req.url}`);
    res.status(200);
    res.send(`Server started on: ${HOST}:${PORT} url=${req.url}`);
});

// use api
app.use(
    '/api', 
    require('./routes/courts'), 
    require('./routes/company')
);

// start server
app.listen(PORT, () => {
    console.log(`Server started on: ${HOST}:${PORT}`);
});