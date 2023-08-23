import {Router} from 'express'

const router = Router()

import { login } from '../controllers/AuthControllers.js'
router.post('/', login)

export default router 