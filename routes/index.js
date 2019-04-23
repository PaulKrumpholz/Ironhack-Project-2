const express = require('express');
const uploadCloud = require('../config/cloudinary.js');
const router  = express.Router();

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
  res.render("profilePage");
})

module.exports = router;
