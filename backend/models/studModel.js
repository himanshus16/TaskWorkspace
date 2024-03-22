const mongoose = require("mongoose");

const Stuschema = new mongoose.Schema({
    designation: String,
    title: String,
    date: String,
    status: String
});

module.exports = mongoose.model("Student", Stuschema);
