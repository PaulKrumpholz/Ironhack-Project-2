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
const date = new Date()
const hours = date.getHours()
console.log(hours)
  Meme.find()
    .populate("_owner")
    .then( memes => {  
      res.render("mainfeed", { 
        memes: memes,
      });
    })
})

/* GET profilePage page */
router.get("/profilePage", (req, res, next) => {
  Meme.find({_owner: req.user._id})
    .then( memes => {  
      res.render("profilePage", { 
        memes: memes,
        user: req.user,
      });
    })
})

router.get("/user/:userId", (req,res,next) => {
  User.findById(req.params._id)
    res.render("user")
  })

module.exports = router;