const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/booksapi');
const booksModel = require('./model');

// http://localhost:3001/deleteBook?bookID=<bookID>&email=<email>
function deleteBook(req, res) {
    let bookID = req.query.bookID;
    let userEmail = req.query.email;
    booksModel.deleteOne({ _id: bookID }).then(() => {
        booksModel.find({ email: userEmail }, function (error, data) {
            if (error) {
                res.send('Error in getting data')
            } else {
                res.send(data)
            }
        })
    })
}
module.exports = deleteBook;