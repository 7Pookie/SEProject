const express = require("express");
const router = express.Router();
const parcelModel = require("../models/parcel-model")

router.get("/" , async(req , res) => {
    const temp = await parcelModel.find({});
    console.log(temp)
    res.send(temp)
})

router.post("/createParcel" , async(req , res) => {
    const formData = req.body;
   const parcel = await parcelModel.create({
    studentId: "1",
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
