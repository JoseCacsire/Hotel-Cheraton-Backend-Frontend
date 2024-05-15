import express from 'express'
import { getAllUsersRoles } from '../controllers/RolesUsuariosController.js'
const UsuarioRolesRoutes = express.Router()
import {authJwt} from '../middlewares/index.js';

UsuarioRolesRoutes.get('/', authJwt.verifyToken, getAllUsersRoles)

export default UsuarioRolesRoutes;