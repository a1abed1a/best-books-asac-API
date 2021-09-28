const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/booksapi');
const booksModel = require('./model');

// http://localhost:3001/addBook
async function addBook(req, res) {
    let { Title, Status, Description, Email} = req.body;
    await booksModel.create({
        title:Title,
        description:Description,
        status:Status,
        email:Email
    })
    booksModel.find({ email: Email}, function (error, data) {
        if (error) {
            res.send('Error in getting data')
        } else {
            res.send(data)
        }
    })
}
module.exports = addBook;