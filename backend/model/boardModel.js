const mongoose = require('mongoose');

const boardSchema = mongoose.Schema({
    board_name: { type: String },
});

const boardModel = mongoose.model("board", boardSchema);

module.exports = boardModel;
