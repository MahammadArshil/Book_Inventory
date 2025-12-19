const mongoose = require('mongoose');

const mediumSchema = mongoose.Schema({
    medium_name: { type: String },
});

const mediumModel = mongoose.model("medium", mediumSchema);

module.exports = mediumModel;
