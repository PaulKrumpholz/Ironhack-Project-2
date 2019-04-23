const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Meme = require("../models/Meme");
const uploadCloud = require('../config/cloudinary.js');

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


// Login Route
router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/mainfeed",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

// Signup Route
router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  if (username === "" || password === "" || email === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email,
      username,
      password: hashPass
    });

    newUser.save()
    .then(() => {
      res.redirect("/auth/login");
    })
    .catch(err => {
      res.render("auth/signup", { message: "Something went wrong" });
    })
  });
});

// Profile Page
router.get("/profilePage", (req,res,next) => {
  res.render("profilePage")
})

// Meme upload Route
router.post('/upload', uploadCloud.single('photo'), (req,res,next) => {
  console.log("TCL: req.body", req.body);
  Meme.create({
    name: req.body.name,
    path: req.file.url,
    picture: String,
    description: String,
  })
    .then(() => {
      res.redirect('mainfeed');
    })
});

// Logout Route
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
