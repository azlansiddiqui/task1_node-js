const express = require('express');
const connectDB = require('./config/db');
const Student = require('./models/studentModel');

const app = express();

connectDB();

app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        console.error("Error fetching Students Data: ", error);
        res.status(500).send("Server Error");
    }
})

app.get('/students/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ msg : 'Student Not Found'})
        }
        res.json(student)
    }
    catch (error) {
        console.error("Error fetching Student Data: ", error);
        res.status(500).send("Server Error");
    }
})

app.listen(2000, () => {
    console.log("Server is running on port no 2000")
})