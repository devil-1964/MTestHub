const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const Student = require('./models/PersonalInfo'); 

const app = express();
app.use(express.json());

const corsOptions = {
  origin: process.env.FRONTEND_API, 
  methods: 'GET', 
  credentials: true, 
  optionsSuccessStatus: 204, 
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

app.post("/student", async (req, res) => {
    try {
      const { aboutme, hobbies, academics, passion, skills, socials } = req.body;
  
      let student = await Student.findOne();
      if (!student) {
        student = new Student({ aboutme, hobbies, academics, passion, skills, socials });
      } else {
        if (aboutme) student.aboutme = aboutme;
        if (hobbies) student.hobbies = hobbies;
        if (academics) student.academics = academics;
        if (passion) student.passion = passion;
        if (skills) student.skills = skills;
        if (socials) student.socials = socials;
      }
  
      await student.save();
      res.status(201).json(student);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

app.get("/", (req, res) => {
    res.send("Welcome to My API");
});

app.listen(3000, () => {
    console.log("Server is Running on port 3000");
});