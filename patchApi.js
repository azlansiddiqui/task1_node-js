const express = require("express");
const connectDB = require("./config/db");
const Student = require("./models/studentModel");

const app = express();

connectDB();
app.use(express.json())

app.patch("/students/:id", async (req, res) => {
  try {
    const studentId = req.params.id
    const updatedData = req.body
    const updateStudent = await Student.findByIdAndUpdate(
        studentId,
        {$set : updatedData},
        {new : true}
    );
    if(!updateStudent){
        return res.status(404).json({ message : "Student not found."})
    }
    res.json(updateStudent)
  } catch (error) {
    console.error("Error fetching Student Data: ", error);
    res.status(500).send("Server Error");
  }
});

app.listen(2000, () => {
  console.log("Server is running on port no 2000");
});
