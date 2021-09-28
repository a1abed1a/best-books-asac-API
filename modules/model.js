const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/booksapi');

const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String
});

const booksModel = mongoose.model('books', bookSchema);

module.exports = booksModel;