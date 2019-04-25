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
  User.findById(req.params.userId)
  .then(user => {
    res.render("user",{
      user: user,
    })
  });
})

// Like Route
router.get("/like/:memeId", (req,res,next) => {
    let likes = [req.user._id];
    Meme.findById(req.params.memeId, {_likes: 1})
     .then(meme => {
       meme._likes = likes.concat(meme._likes);
       meme.save()
      })
      res.redirect("/mainfeed")
})

// Favourite Route
router.get("/favourite", (req,res,next) => {
    res.redirect("/mainfeed")
})

// Comment Route
router.get("/comment", (req,res,next) => {
  res.redirect("/mainfeed")
})

module.exports = router;