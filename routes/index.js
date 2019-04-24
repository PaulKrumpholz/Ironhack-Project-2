const express = require('express');
const router  = express.Router();
const User = require("../models/User");
const Meme = require("../models/Meme");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET mainfeed page */
router.get("/mainfeed", (req, res, next) => {
  res.render("mainfeed");
})

/* GET profilePage page */
router.get("/profilePage", (req, res, next) => {
  Meme.find({_owner: req.user._id})
    .then( memes => {  
      res.render("profilePage", { memes: memes, user: User });
			console.log("TCL: User", User)
    })
})

module.exports = router;
