import express from 'express';
import {getAllRole} from '../controllers/RoleController.js'
const RolesRoutes = express.Router()
import {authJwt} from '../middlewares/index.js';

RolesRoutes.get('/', authJwt.verifyToken, getAllRole)

export default RolesRoutes
