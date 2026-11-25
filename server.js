const express = require("express")
const connectDB = require("./config/db")

const app = express()
connectDB()
app.listen(2000,()=>{
    "Server is running on Port 2000"
})