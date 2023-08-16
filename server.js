const express = require("express");
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute");
const dataRoute = require("./routes/dataRoute")
const environmentRoute = require("./routes/environmentRoute");

app.listen(port, () => {
    console.log(`Server running in ${port}`);
});

app.use(express.json())

app.get('/', (req, res) => res.json({mssg: 'Hello world!'}));

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});


app.use(cookieParser());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/data", dataRoute);
app.use("/api/environments", environmentRoute);