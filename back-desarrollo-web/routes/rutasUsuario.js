//Define las rutas para las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) relacionadas con los 
//usuarios en tu aplicación. Aquí tienes un desglose de cada ruta y su función:
import express from 'express'
import { createUsuario, deleteUsuario,getUsuarioByEmail, getAllUsuario, getUsuarioById, retornarUsuario, updateUsuario } from '../controllers/UsuarioController.js'
const UsuarioRoutes = express.Router()
import {authJwt} from '../middlewares/index.js';

UsuarioRoutes.get('/',authJwt.verifyToken, authJwt.checkAdminRole, getAllUsuario)
UsuarioRoutes.get('/:idUsuario', authJwt.verifyToken, authJwt.checkAdminRole, getUsuarioById)
// pongo /correo para ser mas especifico,ya q es sensible y se confunde con el dearriba si no pongo eso (/correo)
UsuarioRoutes.get('/correo/:correo', getUsuarioByEmail)
UsuarioRoutes.get('/:correo/:contrasena', retornarUsuario)
UsuarioRoutes.post('/', authJwt.verifyToken, authJwt.checkDBARole,  createUsuario)
UsuarioRoutes.put('/:idUsuario', authJwt.verifyToken, authJwt.checkAdminRole,  updateUsuario)
UsuarioRoutes.delete('/:idUsuario', authJwt.verifyToken, authJwt.checkAdminRole,deleteUsuario)


export default UsuarioRoutes

// Estas rutas definen cómo interactuar con los usuarios en tu aplicación a través de las solicitudes
// HTTP correspondientes. Cada ruta está asociada a una función específica en el controlador que ejecuta 
// la lógica necesaria para realizar la operación solicitada.