import express from 'express';
import { createReservacion, deleteReservacion, getAllReservacion, getReservacionById, updateReservacion } from '../controllers/ReservacionController.js';

const ReservacionRoutes = express.Router();
import {authJwt} from '../middlewares/index.js';

// Rutas para CRUD de Reservaciones
ReservacionRoutes.get('/', authJwt.verifyToken , getAllReservacion);
ReservacionRoutes.get('/:idReservacion', authJwt.verifyToken, getReservacionById);
ReservacionRoutes.post('/',createReservacion);
ReservacionRoutes.put('/:idReservacion', authJwt.verifyToken,  updateReservacion);
ReservacionRoutes.delete('/:idReservacion', authJwt.verifyToken, deleteReservacion);

export default ReservacionRoutes;