const { allcat } = require("../Controller/DataController");

const datarouter = require("express").Router();

datarouter.get("/alldata", allcat);

module.exports = datarouter;
