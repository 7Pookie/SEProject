const express = require("express");
const router = express.Router();

router.get("/" , (req , res) => {
    res.send("student inner route")
})

module.exports = router;
