import {Router} from 'express';
const router = Router()
import * as authCtrl from '../controllers/AuthController.js'

router.post('/signUp', authCtrl.signUp)
router.post('/login', authCtrl.login)

export default router;