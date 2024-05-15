import express from 'express'
import { createHabitacion, deleteHabitacion, getAllHabitacion, getHabitacionById, updateHabitacion } from '../controllers/HabitacionController.js'
const habitacionRoutes = express.Router()
import {authJwt} from '../middlewares/index.js';
import { checkLimpiezaRole } from '../middlewares/authJwt.js';

habitacionRoutes.get('/',authJwt.verifyToken,authJwt.checkLimpiezaRole, getAllHabitacion)
habitacionRoutes.get('/:idHabitacion', authJwt.verifyToken,authJwt.checkLimpiezaRole, getHabitacionById)
habitacionRoutes.post('/',authJwt.verifyToken,authJwt.checkLimpiezaRole, createHabitacion)
habitacionRoutes.put('/:idHabitacion', authJwt.verifyToken,authJwt.checkLimpiezaRole, updateHabitacion)
habitacionRoutes.delete('/:idHabitacion', authJwt.verifyToken,authJwt.checkLimpiezaRole,deleteHabitacion)

export default habitacionRoutes;
