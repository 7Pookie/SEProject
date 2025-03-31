const mongoose = require("mongoose");


const complaintSchema = mongoose.Schema({
    parcelOrderNumber: String,
    description: String
})

module.exports = mongoose.model("complaint" , complaintSchema);
