const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
const path = require("path")
const ownerRouter = require("./routes/ownerRouter");
const studentRouter = require("./routes/studentRouter")
const parcelRouter = require("./routes/parcelRouter")

const mongooseConnection = require("./config/mongoose-connection");


app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(cookieParser())

app.use("/owner", ownerRouter);
app.use("/student" , studentRouter);
app.use("/parcel", parcelRouter);

app.get("/" , (req , res) => {
    res.send("Hello from the backend")
})

app.listen(3001)