/*=========================
       DEPENDENCIES
===========================*/
const express = require("express");
const profiles = express.Router();
const Profile = require("../models/profile.js");

/*=========================
          ROUTES
===========================*/

//GET
profiles.get("/", (req, res) => {
  Profile.find({}, (err, foundProfiles) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json({ foundProfiles });
  });
});

//POST
profiles.post("/:id", (req, res) => {
  Profile.create(req.body, (err, createdProfile) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json({ createdProfile });
  });
});

//DELETE
profiles.delete("/:id", (req, res) => {
  Profile.findByIdAndDelete(req.params.id, (err, deletedProfile) => {
    if (err) {
      res.status(400).json({ deletedProfile });
    }
  });
});

//UPDATE
profiles.put("/:id", (req, res) => {
  Profile.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedProfile) => {
      if (err) {
        res.status(400).status({ error: err.message });
      }
      res.status(200).json({ updatedProfile });
    }
  );
});

profiles.post("/", (req, res) => {
  Profile.create(req.body, (error, createdProfile) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).send(createdProfile);
  });
});

/*=========================
          EXPORT
===========================*/
module.exports = profiles;
