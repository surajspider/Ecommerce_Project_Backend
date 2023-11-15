const { allcat, getalldata } = require("../Controller/DataController");

const datarouter = require("express").Router();

datarouter.post("/pushalldata", allcat);
datarouter.get("/fetchalldata", getalldata);

module.exports = datarouter;
