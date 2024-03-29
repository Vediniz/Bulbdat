import User from "../models/UserModel.js"

const createService = (body) => User.create(body);

const findAllService = () => User.find()
const findByIdService = (id) => User.findById(id);

const updateService = (id, name, username, email, password) => User.findOneAndUpdate({_id: id}, {name, username, email, password})

export default {
    createService,
    findAllService,
    findByIdService,
    updateService
};
