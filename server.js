'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const handleBooks = require('./modules/books')
const addBook = require('./modules/addBook')
const deleteBook = require('./modules/deleteBook')
const editBook = require('./modules/editBook')

const server = express();
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT;

server.get('/', homeRouteHandler);

// http://localhost:3001/myBooks
server.get('/myBooks',handleBooks)
// http://localhost:3001/addBook
server.post('/addBook', addBook);
// http://localhost:3001/deleteBook
server.delete('/deleteBook', deleteBook);
// http://localhost:3001/updateBook
server.put('/updateBook', editBook);

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
