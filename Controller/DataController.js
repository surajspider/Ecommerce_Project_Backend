const { productDatas } = require("../Models/DataModel");
const data = require("../data")

const allcat = async (req, res) => {
    try {
        const insertedData = [];

        for (let i = 0; i < data.length; i++) {
            const result = await productDatas.create(data[i]);
            insertedData.push(result);
        }
        res.send({ msg: "Inserted data successfully!", data: insertedData })
    }
    catch (err) {
        console.log("Error in alldata:", err);
    }
}
const getalldata = async (req, res) => {
    try {
        const result = await productDatas.find();
        res.send(result);
    }
    catch (err) {
        console.log("Error on fetching data from db:", err);
    }
}

module.exports = { allcat, getalldata };