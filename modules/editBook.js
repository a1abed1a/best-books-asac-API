const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/booksapi');
const booksModel = require('./model');

// http://localhost:3001/updateBook
async function addBook(req, res) {
    let { bookTitle, bookDescription, bookStatus, userEmail, id } = req.body;
    booksModel.findByIdAndUpdate(id, {
        title: bookTitle,
        description: bookDescription,
        status: bookStatus
    }, (error, data) => {
        if (error) {
            res.send('Error in getting data')
        }
        else {
            booksModel.find({ email: userEmail }, function (error, ownerData) {
                if (error) {
                    res.send('Error in getting data')
                } else {
                    res.send(data)
                }
            })
        }
    })
}
module.exports = addBook;