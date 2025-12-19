const mongoose = require('mongoose');

const booksetitemSchema = mongoose.Schema({
    book_set_id: { type: mongoose.Schema.Types.ObjectId, ref: "booksetModel" },
    book_id: { type: mongoose.Schema.Types.ObjectId, ref: "bookModel" },
    quantity: {type: Number},
});

const booksetitemModel = mongoose.model("booksetitem", booksetitemSchema);

module.exports = booksetitemModel;
