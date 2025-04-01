const mongoose = require("mongoose");


const complaintSchema = mongoose.Schema({
    parcelOrderNumber: String,
    description: String,
    email: String
})

module.exports = mongoose.model("complaint" , complaintSchema);
