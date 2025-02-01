const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const Student = require('./models/PersonalInfo'); 

const app = express();
app.use(express.json());

// Configure CORS using the FRONTEND_API environment variable
const corsOptions = {
  origin: process.env.FRONTEND_API, // Allow requests from the frontend URL
  methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
  credentials: true, // Allow cookies and authentication headers
  optionsSuccessStatus: 204, // Respond with 204 No Content for preflight requests
};

app.use(cors(corsOptions));

mongoose.connect(process.env.MONGOURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.get("/student", async (req, res) => {
    try {
        const student = await Student.findOne();
        if (!student) {
            return res.status(404).send('No information found');
        }
        res.json(student);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get("/", (req, res) => {
    res.send("Welcome to My API");
});

app.listen(3000, () => {
    console.log("Server is Running on port 3000");
});