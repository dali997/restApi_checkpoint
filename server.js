const express = require ("express");
require('dotenv').config({path:"./config/.env" });
const connectDB = require("./connectDB");
connectDB()
let port = process.env.PORT;



const app = express();
app.use(express.json())
app.use("/api/contact",require("./router/user"))
app.listen(port, ()=> {
    console.log(`server is listening to ${port}`);
})
