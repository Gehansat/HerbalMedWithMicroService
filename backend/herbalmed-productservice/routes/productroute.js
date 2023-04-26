const router = require("express").Router();
const { getallproducts } = require("../controller/productcontroller");
const { getoneproduct } = require("../controller/productcontroller");
const { addproduct } = require("../controller/productcontroller");
const { updateproduct } = require("../controller/productcontroller");
const { deleteproduct } = require("../controller/productcontroller");


router.get("/", getallproducts);
router.get("/:id", getoneproduct);
router.post("/", addproduct);
router.put("/:id", updateproduct);
router.delete("/:id", deleteproduct);


module.exports = router;

