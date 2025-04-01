const express = require("express");
const router = express.Router();
const parcelModel = require("../models/parcel-model")
const authMiddleWare = require("../middlewares/isLoggedIn");

router.get("/" ,authMiddleWare, async(req , res) => {
    const tempData = req.user;
    console.log(tempData.email)
    const temp = await parcelModel.find({email: tempData.email});
    console.log(temp)
    res.send(temp)
})

router.post("/getById" ,authMiddleWare, async(req , res) => {
    const {parcelOrderNumber} = req.body;
    const temp = await parcelModel.find({parcelOrderNumber});
    console.log(temp)
    res.send(temp)
})

router.post("/createParcel" ,authMiddleWare, async(req , res) => {
    const formData = req.body;
   const parcel = await parcelModel.create({
    email: req.user.email,
    parcelOrderNumber: formData.orderNumber,
    receptionStatus: false,
    description: formData.description,
    dateOfDeleivery: formData.date,
    otp: formData.otp
   })
   console.log(parcel);
   res.send(parcel);
})

module.exports = router;
