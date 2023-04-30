const router = require("express").Router();
const { updatecart, getcart } = require("../controller/cartcontroller");

router.get("/", getcart);
router.post("/", updatecart);

module.exports = router;