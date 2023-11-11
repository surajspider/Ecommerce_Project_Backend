const express = require("express");
const app = express();
const PORT = 4500;
const cors = require("cors");
const datarouter = require("./Router/DataRouter");
const userrouter = require("./Router/Userrouter");
const connection = require("./Config/db");


app.use(cors({
    origin: "*"
}))

app.use(express.json());
app.get("/", (req, res) => {
    res.send("This is Home Page!");
    console.log("Home!");
})

app.use("/api", datarouter);
app.use("/apis", userrouter);

app.listen(PORT, async () => {
    try {
        await connection();
        console.log("Application running on PORT", PORT);
    }
    catch (err) {
        console.log("Error Occurred during listening PORT", err);
    }
})