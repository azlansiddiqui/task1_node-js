const express = require('express');
const connectDB = require('./config/db');
const Student = require('./models/studentModel');

const app = express();

connectDB();

app.use(express.json());

app.post('/students', async (req, res) => {
    try {
        const { name, email, age, course,city,isActive } = req.body;

        const newStudent = new Student({
            name,
            email,
            age,
            course,
            city,
            isActive
        });

        const student = await newStudent.save();
        res.json(student);
    }
    catch (error) {
        console.log("Error saving Data: ", error);
        res.status(500).send("Server Error");
    }
});

app.listen(2000, () => {
    console.log("Server is running on port no 2000");
})