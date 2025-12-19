const mongoose = require('mongoose');

const yearSchema = mongoose.Schema({
    year_name: { type: String },
});

const yearModel = mongoose.model("year", yearSchema);

module.exports = yearModel;
