const mongoose = require('mongoose');

const classSchema = mongoose.Schema({
    class_name: { type: String },
});

const classModel = mongoose.model("class", classSchema);

module.exports = classModel;
