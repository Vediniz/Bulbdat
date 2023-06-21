const { acceptsEncodings } = require("express/lib/request")
const axios = require('axios')

const devicesController = async(req,res,next) => {
    try {
        axios.get("http://localhost:8000/devices")
            .then((response)=>{
                console.log(response)
                res.status(200).send(JSON.stringify(response.data))
            })
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports.devicesController = devicesController