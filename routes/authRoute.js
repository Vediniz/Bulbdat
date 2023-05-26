const router = require("express").Router()
const User = require("../models/UserModel")
const { createSecretToken } = require("../config/SecretToken")
const bcrypt = require("bcrypt")
const { userVerification } = require("../middlewares/AuthMiddleware")
const { loginController, signupController } = require("../controllers/AuthControllers")

router.post("/login", loginController)
router.post("/signup", signupController)


module.exports = router