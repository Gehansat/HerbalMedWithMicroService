const router = require("express").Router();
const updatecart = require("../controller/cartcontroller");
const getcart = require("../controller/cartcontroller");

router.get("/", getcart);
router.post("/", updatecart);

module.exports = router;
