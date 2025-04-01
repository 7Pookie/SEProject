const express = require("express");
const router = express.Router();
const complaintModel = require("../models/complaint-model")
const authMiddleWare = require("../middlewares/isLoggedIn");

router.get("/" ,authMiddleWare, async(req , res) => {
    const userEmail = req.user.email;
    const temp = await complaintModel.find({email: userEmail})
    console.log(temp)
    res.send(temp)
})

router.post("/createComplaint" ,authMiddleWare, async(req , res) => {
    const complaintForm = req.body;
    const temp = await complaintModel.create({
        email: req.user.email,
        parcelOrderNumber: complaintForm.orderNumber,
        description: complaintForm.description
    })
    res.send(temp);
});

module.exports = router;
