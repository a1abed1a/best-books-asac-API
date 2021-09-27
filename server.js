'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const handleBooks = require('./modules/books')

const server = express();
server.use(cors());
const PORT = process.env.PORT;

server.get('/', homeRouteHandler);

// http://localhost:3001/myBooks
server.get('/myBooks',handleBooks)

server.get('*', notFoundHandler);

function notFoundHandler(req, res) {
    res.status(404).send('not found 404')
}

function homeRouteHandler(req, res) {
    res.send('Home Route')
}

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
