import userService  from '../services/userService.js'

const create = async (req, res) => {
    try {
        const { name, username, email, password} = req.body

        if (!name || !username || !email || !password) {
            res.status(400).send({ message: "Submit all fields for registration" })
        }

        const user = await userService.createService(req.body)

        if (!user) {
            return res.status(404).send({ message: "Error creating user" })
        }

        res.status(201).send({
            message: "User created successfully",
            user: {
                id: user._id,
                name,
                username,
                email,
            },
        })
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const findAll = async (req, res) => {
    try {
        const users = await userService.findAllService()
        if (users.length === 0) {
            return res.status(400).send({ message: "There are no registered users" })
        }
        res.send(users)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const findById = async (req, res) => {
    try {
        const user = req.user
        res.send(user)
    } catch (err) { res.status(500).send({ message: err.message }) }
}

const update = async (req, res) => {
    try {
        const { name, username, email, password } = req.body
        const { id, user } = req

        if (!name && !username && !email && !password ) {
            res.status(400).send({ message: "Submit at least one field for update" })
        }


        await userService.updateService(id, name, username, email, password)

        res.send({ message: "User successfully updated" })
    } catch (err) {
        res.status(500).send({ message: err.message })

    }
}

export default {
    create,
    findAll,
    findById,
    update,
} 