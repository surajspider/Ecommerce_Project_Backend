const userslist = [];

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret_key = "suraj";

const regfun = (req, res) => {
    const data = req.body;
    console.log(data);
    const findemail = userslist.find((item) => {
        if (item.email === data.email) {
            return item;
        }
    });
    if (findemail) {
        return res.send({ msg: "User Already Registered!" })
    }
    else {
        const saltround = bcrypt.genSaltSync(10);
        const hashpassword = bcrypt.hashSync(data.pass, saltround);
        console.log(hashpassword);
        const tempobj = {
            uname: data.uname,
            email: data.email,
            pass: hashpassword,
            contact: data.contact
        }
        userslist.push(tempobj);
        const token = jwt.sign({ email: data.email }, secret_key, { expiresIn: "360000" });
        console.log("Token:", token);
        res.send({ msg: "User Registered Successfully!", token: token });
        console.log(userslist);
    }
}

const logfun = (req, res) => {
    const logindata = req.body;
    const finduser = userslist.find(item => {
        if (item.email === logindata.email)
            return item;
    })
    if (finduser) {
        const validate = bcrypt.compareSync(logindata.pass, finduser.pass);
        if (validate) {
            const token = jwt.sign({ useremail: logindata.email }, secret_key, { expiresIn: "360000" });
            console.log("token:", token);
            return res.send({ msg: "User Logged in Successfully!", token: token });
        }
        else {
            return res.send({ msg: "User Password is Wrong!" });
        }
    }
    else {
        console.log("Email is not registered. Please Provide a valid email!");
        return res.send({ msg: "Email not registered!!" });
    }

}

module.exports = { regfun, logfun };