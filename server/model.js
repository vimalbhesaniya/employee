const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  institutionName: {
    type: String,
    required: false
  },
  degreeLevel: {
    type: String,
    required: false
  },
  startDateSchool: {
    type: Date,
    required: false
  },
  endDateSchool: {
    type: Date,
    required: false
  },
  gpa: {
    type: Number,
    required: false
  },
  certifications: [{
    type: String,
    required: false
  }],
  onlineCourses: [{
    type: String,
    required: false
  }],
});

const workExperienceSchema = new mongoose.Schema({
  userType: {
    type: String,
    required: false
  },
    jobTitle: {
      type: String,
    },
    companyName: {
      type: String,
    },
    startDateWork: {
      type: Date
    },
    endDateWork: {
      type: Date
    },
    responsibilities: {
      type: String
    },
  achievements: [{ type: String, required: false }],
});

const addressSchema = new mongoose.Schema({
  personalAddress: {
    type: String,
    required: false
  },
  pinCode: {
    type: String,
    required: false
  },
  state: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  }
});


const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  location: { addressSchema },
  profileImage: {
    type: String,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  langauges: {
    type: [String],
  },
  profession: {
    type: String,
  },
  education: { educationSchema },
  workExperience: { workExperienceSchema },
});
const data = mongoose.model("users", newSchema);
module.exports = data;
