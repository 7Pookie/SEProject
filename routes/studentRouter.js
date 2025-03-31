const express = require("express");
const router = express.Router();
const userModel = require("../models/user-model")

router.get("/" , async(req , res) => {
    const userData = await userModel.find({})
    console.log(userData)
    res.send(userData)
})

router.post("/createUser" , async(req , res) => {
    const user = await userModel.create({
        name: "Kranti Sambhav 1",
        email: "ksp",
        password: "123",
        isAdmin: false,
        parcel: [],
        complaints: [],
        rollNumber: "1",
        course: "A",
        major: "CS",
        hostel: "MBH",
        gender: "M",
        mobileNumber: "1"
    })
    res.send(user);
});

module.exports = router;
