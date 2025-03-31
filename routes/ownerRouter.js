const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

router.get("/" , async(req , res) => {

})

router.post("/create" , async(req , res) => {
    const user1 = await ownerModel.create({
        name: "Kranti Sambhav",
        email: "kranti@gmail.com",
        password: "12345"
    })
    console.log(user1);
    res.send(user1);
})

module.exports = router;
