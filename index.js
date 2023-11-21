const express = require("express");
const app = express();
const PORT = 4500;
const cors = require("cors");
const datarouter = require("./Router/DataRouter");
const userrouter = require("./Router/Userrouter");
const connection = require("./Config/db");
const { createOrder, capturePayment } = require("./Controller/paypal-api");

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

app.post("/payment/create-paypal-order", async (req, res) => {
    try {
        const request = req.body;
        console.log(req.body);
        const order = await createOrder(request);
        res.json(order);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post("/payment/capture-paypal-order", async (req, res) => {
    const { orderID } = req.body;
    try {
        const captureData = await capturePayment(orderID);
        res.json(captureData);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(PORT, async () => {
    try {
        await connection();
        console.log("Application running on PORT", PORT);
    }
    catch (err) {
        console.log("Error Occurred during listening PORT", err);
    }
})