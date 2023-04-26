const router = require("express").Router();

// Importing cart controll functions
const {
  createnewreview,
} = require("../controller/reviewcontroller.js");

// Adding a new cart by sending POST request
router.put("/", createnewreview);

module.exports = router;
