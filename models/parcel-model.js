const mongoose = require("mongoose");


const parcelSchema = mongoose.Schema({
    email: String,
    serviceName: String,
    parcelOrderNumber: String,
    receptionStatus: Boolean,
    description: String,
    dateOfDeleivery: String,
    otp: String
})

module.exports = mongoose.model("parcel" , parcelSchema);
