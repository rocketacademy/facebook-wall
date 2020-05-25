import { Router } from 'express'
import post from './post'

const router = Router()
router.get('/', (_, res) => res.sendStatus(404))
router.use('/posts', post)
export default router
