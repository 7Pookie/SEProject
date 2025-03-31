const mongoose = require("mongoose");


const feedbackSchema = mongoose.Schema({
    description: String
})

module.exports = mongoose.model("feedback" , feedbackSchema);



