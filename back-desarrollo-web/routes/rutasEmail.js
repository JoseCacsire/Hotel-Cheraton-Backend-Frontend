import express from 'express'
import {enviarCorreo} from '../controllers/EmailController.js'

const emailRoutes = express.Router();

//Ruta para enviar correo electrónico
emailRoutes.post('/',enviarCorreo);

export default emailRoutes;