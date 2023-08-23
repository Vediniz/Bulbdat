import { createService, findAllService, countEnvironments, topEnvironmentsService, findByIdService, searchByTitleService, byUserService } from '../services/environmentsService.js'

const create = async (req, res) => {
    try {
        const { title, description } = req.body

        if (!title || !description ) {
            res.status(400).send({ message: "Submit all fields for registration" })
        }
        await createService(
            {
                title,
                description,
                user: req.userId,
            }
        )
        res.send(201)
    } catch (err) { res.status(500).send({ message: err.message }) }
}

const findAll = async (req, res) => {
    try {
        let { limit, offset } = req.query
        limit = Number(limit)
        offset = Number(offset)

        if (!limit) {
            limit = 2
        }
        if (!offset) {
            offset = 0
        }

        const environments = await findAllService(offset, limit)
        const total = await countEnvironments()
        const currentUrl = req.baseUrl

        const next = offset + limit
        const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null

        const previous = offset - limit < 0 ? null : offset - limit
        const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null


        if (environments.length === 0) {
            return res.status(400).send({ message: "There are no environments", })
        }
        res.send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,
            results: environments.map(environmentsItem => ({
                id: environmentsItem._id,
                title: environmentsItem.title,
                name: environmentsItem.user.name,
                username: environmentsItem.user.username,
            }))
        })
    } catch (err) { res.status(500).send({ message: err.message }) }

}

const topEnvironments = async (req, res) => {
    try {
        const environments = await topEnvironmentsService();
        if (!environments) {
            return res.status(400).send({ message: "There is no registeted post" })
        }
        res.send({
            environments: {
                id: environments._id,
                title: environments.title,
                description: environments.description,
                name: environments.user.name,
                username: environments.user.username,
            }
        })
    } catch (err) { res.status(500).send({ message: err.message }) }

}

const findById = async (req, res) => {
    try {
        const { id } = req.params
        const environments = await findByIdService(id)
        return res.send({
            environments: {
                id: environments._id,
                title: environments.title,
                description: environments.description,
                name: environments.user.name,
            }
        })
    } catch (err) { res.status(500).send({ message: err.message }) }
}


const searchByTitle = async (req, res) => {
    try {
        const { title } = req.query
        const environments = await searchByTitleService(title)

        if(environments.length === 0) {
            return res.status(400).send({message: 'There are no posts with this title'})
        }
        return res.send({
            results: environments.map(environmentsItem => ({
                id: environmentsItem._id,
                title: environmentsItem.title,
                description: environmentsItem.description,
                name: environmentsItem.user.name,
            }))
        })
    } catch (err) { res.status(500).send({ message: err.message }) }
}

const byUser = async(req, res) => {
    try{
        const id = req.userId
        const environments = await byUserService(id)

        return res.send({
            results: environments.map(environmentsItem => ({
                id: environmentsItem._id,
                title: environmentsItem.title,
                description: environmentsItem.description,
                name: environmentsItem.user.name,
            }))
        })
    } catch (err) { res.status(500).send({ message: err.message }) }
}
export {
    create,
    findAll,
    topEnvironments,
    findById,
    searchByTitle,
    byUser
}