const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    book_name: { type: String },
    book_subject: { type: String },
    book_publisher: { type: String },
});

const bookModel = mongoose.model("book", bookSchema);

module.exports = bookModel;
