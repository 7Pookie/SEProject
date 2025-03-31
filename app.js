const express = require("express");
const app = express();
const cors = require("cors");

const cookieParser = require("cookie-parser")
const path = require("path")
const ownerRouter = require("./routes/ownerRouter");
const studentRouter = require("./routes/studentRouter")
const parcelRouter = require("./routes/parcelRouter")
const complaintRouter = require("./routes/complaintRouter")
const mongooseConnection = require("./config/mongoose-connection");
const complaintModel = require("./models/complaint-model");
const feedbackRouter = require("./routes/feedbackformRouter")
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(cookieParser())

app.use("/owner", ownerRouter);
app.use("/student" , studentRouter);
app.use("/parcel", parcelRouter);
app.use("/complaint", complaintRouter)
app.use("/feedback" , feedbackRouter)
app.get("/" , (req , res) => {
    res.send("Hello from the backend")
})

app.listen(3001)