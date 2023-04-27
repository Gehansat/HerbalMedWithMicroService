const router = require("express").Router();
const { getproducts } = require("../controller/productcontroller");
const { getoneproduct } = require("../controller/productcontroller");
const { productadd } = require("../controller/productcontroller");
const { productupdate } = require("../controller/productcontroller");
const { productdelete } = require("../controller/productcontroller");
const { productsearch } = require("../controller/productcontroller");

router.get("/", getproducts);
router.get("/:id", getoneproduct);
router.post("/", productadd);
router.put("/:id", productupdate);
router.delete("/:id", productdelete);
router.get("/search/:text", productsearch);

module.exports = router;
