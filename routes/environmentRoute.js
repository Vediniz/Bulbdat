import express from 'express'
const router = express.Router();

import {create, findAll, topEnvironments, findById, searchByTitle, byUser} from '../controllers/EnvironmentController.js'
import {authMiddleware} from '../middlewares/AuthMiddleware.js'

router.post("/", authMiddleware, create)
router.get("/", findAll)
router.get("/top", topEnvironments)
router.get("/search", searchByTitle)
router.get("/byUser", authMiddleware, byUser)

router.get("/:id", authMiddleware, findById)



// router.delete('/:id', deleteEnvironment) 

// router.patch('/:id', updateEnvironment)

export default router