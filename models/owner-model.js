const mongoose = require("mongoose");


const ownerSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
    parcel: {
        type: Array,
        default: []
    },
    complaints: {
        type: Array,
        default: []
    },
    gender: String,
    mobileNumber: String
})

module.exports = mongoose.model("owner" , ownerSchema);
