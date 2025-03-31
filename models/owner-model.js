const mongoose = require("mongoose");


const ownerSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

module.exports = mongoose.model("owner" , ownerSchema);
