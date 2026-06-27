import express from 'express'
import {getUsersForSidebar , getConversationForSidebar, getMessage} from '../controllers/message.controller.js'
import { protectRoute } from '../middleware/auth.middleware.js'

const router = express.Router()

router.get('/users',protectRoute, getUsersForSidebar)
router.get('/conversations',protectRoute, getConversationForSidebar)
router.get('/:id',protectRoute, getMessage)

export default router