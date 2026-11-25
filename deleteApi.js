const express = require('express');
const connectDB = require('./config/db');
const Student = require('./models/studentModel');

const app = express();

connectDB();

app.delete('/students/:id', async (req, res) => {
    try{
        const studentId = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(studentId);

        if(!studentId) {
            return res.status(404).json({ msg: 'Student Not found'})
        }
        res.json({ msg: 'Student Deleted successfully'})
    }
    catch (error) {
        console.error("Error while deleting data: ", error);
        res.status(500).send("Server Error")
    }
} )

app.listen(2000, () => {
    console.log("Server is running on port no 2000")
})