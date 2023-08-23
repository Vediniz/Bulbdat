import mongoose from 'mongoose'

const EnvironmentsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    // banner:{
    //     type:String,
    //     require: true,
    // },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

})


const Environments = mongoose.model('Environments', EnvironmentsSchema)

export default Environments