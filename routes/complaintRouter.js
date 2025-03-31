const express = require("express");
const router = express.Router();
const complaintModel = require("../models/complaint-model")

router.get("/" , async(req , res) => {
    const temp = await complaintModel.find({})
    console.log(temp)
    res.send(temp)
})

router.post("/createComplaint" , async(req , res) => {
    const complaintForm = req.body;
    const temp = await complaintModel.create({
        parcelOrderNumber: complaintForm.orderNumber,
        description: complaintForm.description
    })
    res.send(temp);
});

module.exports = router;
