const router = require("express").Router();

const {
    createUser,
    loginUserCtrl,
    handleRefreshToken,
    logout
   
} = require("../controller/usercontroller");


router.post("/register",createUser)
router.post("/logins", loginUserCtrl)
router.get("/refresh",handleRefreshToken)
router.get("/logout",logout)


module.exports = router;