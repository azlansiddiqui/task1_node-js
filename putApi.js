const express = require("express");
const connectDB = require("./config/db");
const Student = require("./models/studentModel");

const app = express();

connectDB();
app.use(express.json())

app.put("/students/:id", async (req, res) => {
  try {
    const studentId = req.params.id
    const { name, email, age, course, city, isActive } = req.body;
    if (!name || !email){
        return res.status(400).json({
            message : "Name and email are required for put"
        })
    }
    const updateStudent = await Student.findByIdAndUpdate(
        studentId,
        { name, email, age, course, city, isActive },
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
