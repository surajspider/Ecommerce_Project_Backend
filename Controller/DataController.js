const data = require("../data")

const allcat = (req, res) => {
    return res.send(data);
}

module.exports = { allcat };