const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  name: String,
  city: String,
  industry: String,
  yearsOfExperience: Number,
  image: String,
  likes: Number,
  phone: String,
  email: String,
  specialties: [],
  availableToMeet: Boolean
});

module.exports = mongoose.model("Profile", profileSchema);

//https://uifaces.co/api-docs
