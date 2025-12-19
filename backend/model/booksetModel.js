const mongoose = require('mongoose');

const booksetSchema = mongoose.Schema({
    board_id: { type: mongoose.Schema.Types.ObjectId, ref:"boardModel" },
    medium_id: { type: mongoose.Schema.Types.ObjectId, ref:"mediumModel" },
    class_id: { type: mongoose.Schema.Types.ObjectId, ref:"classModel" },
    year_id: { type: mongoose.Schema.Types.ObjectId, ref:"yearModel" },
    set_name: { type: String },
});

const booksetModel = mongoose.model("bookset", booksetSchema);

module.exports = booksetModel;
