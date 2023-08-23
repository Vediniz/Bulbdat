import Environments from "../models/EnvironmentModel.js"

const createService = (body) => Environments.create(body)


const findAllService = (offset, limit) => Environments.find().sort({_id: -1}).skip(offset).limit(limit).populate("user")

const countEnvironments = () => Environments.countDocuments()

const topEnvironmentsService = () => Environments.findOne().sort({_id: -1}).populate("user")

const findByIdService = (id) => Environments.findById(id).populate("user")

const searchByTitleService = (title) => Environments.find({
    title: {$regex: `${title || ""}`, $options: "i"},
}).sort({_id: -1}).populate("user")

const byUserService = (id) => Environments.find({user: id}).sort({_id: -1}).populate("user")

export  {createService, findAllService, countEnvironments, topEnvironmentsService, findByIdService, searchByTitleService, byUserService}