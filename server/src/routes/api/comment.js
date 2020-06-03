import { Router } from 'express'
import { createComment, getCommentList } from '../../controllers'

const router = Router()

router.get('/', getCommentList)
router.post('/', createComment)
export default router
