const { regfun, logfun, userauth } = require("../Controller/userController");
const auth = require("../Middleware/auth");

const userrouter = require("express").Router();

userrouter.post("/register", regfun);
userrouter.post("/login", logfun);
userrouter.get("/auth", auth, userauth);

module.exports = userrouter;