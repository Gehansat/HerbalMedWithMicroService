const router = require("express").Router();

const {
    createuser,
    loginusercontrol,
    handlerefreshtoken,
    logout
   
} = require("../controller/usercontroller");


router.post("/signup",createuser)
router.post("/logins", loginusercontrol)
router.get("/refresh",handlerefreshtoken)
router.get("/logout",logout)


module.exports = router;