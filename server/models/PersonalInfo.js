const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  aboutme: {
    name: String,
    college: String,
    passingYear: Number,
    aggregate: Number,
    description: String,
  },
  hobbies: [
    {
      name: String,
      description: String,
    },
  ],
  academics: {
    graduation: {
      college: String,
      branch: String,
      cgpa: Number,
    },
  },
  passion: {
    title: String,
    description: String,
  },
  skills: [
    {
      name: String,
    },
  ],
  socials: [
    {
      social_name: String, // e.g., GitHub, LinkedIn, Source Code
      links: String, // e.g., https://github.com/username
    },
  ],
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;