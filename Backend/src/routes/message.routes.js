import express from 'express'
import {getUsersForSidebar , getConversationForSidebar, getMessage,sendMessage} from '../controllers/message.controller.js'
import { protectRoute } from '../middleware/auth.middleware.js'
import { upload } from '../middleware/upload.middleware.js'

const router = express.Router()

router.use(protectRoute)

router.get('/users', getUsersForSidebar)
router.get('/conversations', getConversationForSidebar)
router.get('/:id', getMessage)
router.post('/send/:id',upload.single("media"), sendMessage)// send single message

export default router