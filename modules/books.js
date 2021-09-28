const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/booksapi');
const booksModel = require('./model');

function seedBooksInfo() {
    const user1 = new booksModel({
        title: `title one`,
        description: `description one`,
        status: `status one`,
        email: `email one`
    })
    const user2 = new booksModel({
        title: `title two`,
        description: `description two`,
        status: `status two`,
        email: `abedshehadeh1@gmail.com`
    })
    const user3 = new booksModel({
        title: `title three`,
        description: `description three`,
        status: `status three`,
        email: `email threee`
    })
    user1.save();
    user2.save();
    user3.save();
}
seedBooksInfo();

// http://localhost:3001/myBooks?email=<email>
function handleBooks(req, res) {
    let emailQ = req.query.email
    booksModel.find({ email: emailQ }, function (error, data) {
        if (error) {
            res.send('Error in getting data')
        } else {
            res.send(data)
        }
    })
}

module.exports = handleBooks;