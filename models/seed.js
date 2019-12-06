const mongoose = require("mongoose");
const ProfilesModel = require("./profile");
//SEED DATA
const seedProfile = [
  {
    name: "Amy K.",
    city: "New York",
    industry: "Personal Trainer",
    yearsOfExperience: 3,
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    likes: 15,
    phone: "111-222-333",
    email: "test@gmail.com",
    specialties: [
      "Certified Personal Trainer",
      "In-home and at the gym training available",
      "Group training"
    ],
    availableToMeet: true
  },
  {
    name: "Jack R.",
    city: "Naples",
    industry: "CPA",
    yearsOfExperience: 5,
    image:
      "http://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
    likes: 4,
    phone: "111-222-333",
    email: "test@gmail.com",
    specialties: ["Tax Prep", "Estate Planning", "Trust"],
    availableToMeet: true
  },
  {
    name: "Linda C.",
    city: "Naples",
    industry: "Family Attorney",
    yearsOfExperience: 25,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    likes: 20,
    phone: "111-222-333",
    email: "test@gmail.com",
    specialties: ["Family owned and operated practice"],
    availableToMeet: true
  }
];

const seedDB = () => {
  // Declare db name, URI, and instantiate connection
  const dbName = "profiles";
  const dbURI = `mongodb://localhost:27017/${dbName}`;

  const dbConnection = mongoose.connection;

  dbConnection.on("error", err => console.log("DB Connection Error: ", err));

  dbConnection.on("connected", () => console.log("DB Connected to: ", dbURI));

  dbConnection.on("disconnected", () => console.log("DB Disconnected"));

  mongoose.connect(dbURI, { useNewUrlParser: true }, () =>
    console.log(`${dbName} db running on ${dbURI}`)
  );

  ProfilesModel.create(seedProfile, (err, newProfiles) => {
    if (err) {
      console.log("Seeding error: ", err);
    } else {
      console.log("Seeding OK: ", newProfiles);
    }
    dbConnection.close();
  });
};
seedDB();
module.exports = seedProfile;
