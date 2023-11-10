const express = require("express");
const app = express();
const PORT = 4500;
const cors = require("cors");
const datarouter = require("./Router/DataRouter");

app.use(cors({
    origin: "*"
}))

app.get("/", (req, res) => {
    res.send("This is Home Page!");
    console.log("Home!");
})

app.use("/api", datarouter);

app.listen(PORT, () => {
    try {
        console.log("Application running on PORT", PORT);
    }
    catch (err) {
        console.log("Error Occurred during listening PORT", err);
    }
})