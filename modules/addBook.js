const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/booksapi');
const booksModel = require('./model');
const express = require('express');
const server = express();
server.use(express.json());

// http://localhost:3001/addBook
async function addBook(req, res) {
    console.log(req.body);
    let { bookTitle, bookDescription, bookStatus, userEmail} = req.body;
    await booksModel.create({
        title:bookTitle,
        description:description,
        status:bookStatus,
        email:userEmail
    })
    booksModel.find({ email: userEmail}, function (error, data) {
        if (error) {
            res.send('Error in getting data')
        } else {
            res.send(data)
        }
    })
}
module.exports = addBook;