const jwt = require("jsonwebtoken");
const secret_key = "suraj";

const auth = (req, res, next) => {
    const BearerToken = req.headers["authorization"];
    if (BearerToken) {
        const token = BearerToken.split(" ")[1];
        const validate = jwt.verify(token, secret_key);
        if (validate) {
            next();
        }
        else {
            console.log("User not authorized!");
        }
    }
    else {
        console.log("User not allowed!");
    }
}

module.exports = auth;