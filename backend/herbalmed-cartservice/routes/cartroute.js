const router = require("express").Router();

// Importing cart controll functions
const {
  createnewcart,
  updatecart,
  getcart,
  deletecart,
} = require("../controller/cartcontroller.js");

// Adding a new cart by sending POST request
router.post("/", createnewcart);

// Getting one cart by sending ID
router.get("/:cartID", getcart);

// Updating the cart by sending the id
router.put("/:cartID", updatecart);

// Deleting the cart by sending the id
router.delete("/:cartID", deletecart);

module.exports = router;
