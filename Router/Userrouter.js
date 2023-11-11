const { regfun, logfun } = require("../Controller/userController");
const auth = require("../Middleware/auth");

const userrouter = require("express").Router();

userrouter.post("/register", regfun);
userrouter.post("/login", logfun);
userrouter.get("/auth", auth, (req, res) => {
    console.log("user authorized!");
    res.send({ msg: "User Authorized" });
})

module.exports = userrouter;