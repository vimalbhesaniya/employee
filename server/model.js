const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
  skills: {
    type: [String],
  },
  profession: {
    type: String,
  }
});

const AddressSchema = new mongoose.Schema({
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
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const EducationSchema = new mongoose.Schema({
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
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const WorkExperienceSchema = new mongoose.Schema({
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
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const CompanySchema = new mongoose.Schema({
  Name: { type: String, required: false },
  Address: { type: String, required: false },
  Location: { type: String, required: false },
  Email_ID: { type: String, required: false },
  Logo: { type: String, required: false },
  TagLine: { type: String, required: false },
  Contact: { type: String, required: false },
  Years: { type: String, required: false },
  Langauges: { type: [String], required: false },
  Project: { type: [String], require: false },
  Description: { type: String, required: false },
  secretKey:{type:String, required: false},
  OwnerDetail: {
    Name: { type: String, required: false },
    EmailID: { type: String, required: false },
    Contact: { type: String, required: false }
  },
  HRDetail: {
    Name: { type: String, required: false },
    EmailID: { type: String, required: false },
    Contact: { type: String, required: false }
  }
});

const JobPostSchema = new mongoose.Schema({
  Title: { type: String, required: false },
  Position: { type: String, required: false },
  JobPostedTime: { type: String, default: Date.now, required: false },
  Description: {
    JobDescription: { type: String, required: false },
    TechnicalDescription: { type: String, required: false }
  },
  Experience: { type: String, required: false },
  JobType: { type: String, required: false },
  Salary: { type: String, required: false },
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" }
});

const SavedJobSchema=new mongoose.Schema({
  // User_ID:{ type: String, required:true},
  // Job_ID:{ type: String, required:true},
  Status:{ type: String, enum:["Expired","Active"],default:"Active"},
  jobpostId: { type: mongoose.Schema.Types.ObjectId, ref: "JobPost" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
})

const ConnectionSchema=new mongoose.Schema({
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
})

const User = mongoose.model("users", UserSchema);
const Address = mongoose.model("address", AddressSchema);
const Education = mongoose.model("educations", EducationSchema);
const WorkExperience = mongoose.model("workexperiences", WorkExperienceSchema);
const Company = mongoose.model("companies", CompanySchema);
const JobPost = mongoose.model("jobposts", JobPostSchema);
const SavedJob = mongoose.model("savedjobs", SavedJobSchema);
const Connection = mongoose.model("connections", ConnectionSchema);

module.exports = { User, Address, Education, WorkExperience, Company, JobPost, SavedJob, Connection };
