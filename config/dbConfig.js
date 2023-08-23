import mongoose  from 'mongoose'
const connectDatabase = () => {
    console.log("Wait Connecting to the database")

    mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log("Mongo Connected")).catch((error) => console.log(error))}

export default  connectDatabase