import express from 'express'
import dotenv from "dotenv"
import connectedDB from "./config/dbConfig.js"

import userRoute from "./routes/userRoute.js"
import authRoute from "./routes/authRoute.js"
import environmentRoute from "./routes/environmentRoute.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 4000


app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

connectedDB()
app.use(express.json())
app.use("/user", userRoute)
app.use("/auth", authRoute)
app.use("/environment", environmentRoute)

//Essa rota tem que ser a ultima 
app.use((req, res, next) => {
    res.status(404).send("Página não encontrada");
});

app.listen(port, () => console.log(`Server running on port ${port}`))

// app.use("/api/rooms", roomRoute);