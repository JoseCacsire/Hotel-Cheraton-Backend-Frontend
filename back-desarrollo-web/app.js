// Este archivo establece las configuraciones básicas del servidor Express, configura las rutas y 
//realiza la conexión a la base de datos, luego inicia el servidor para escuchar las solicitudes 
//entrantes en el puerto 8000

// ARCHIVO APP.JS
import  express  from "express"
import cors from 'cors'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import db from './database/db.js'

import UsuarioRoutes from './routes/rutasUsuario.js'
import habitacionRoutes from "./routes/rutasHabitacion.js"
import ReservacionRoutes from "./routes/rutasReservacion.js"
import RolesRoutes from "./routes/rutasRole.js"
import rutasRolesUsuarios from "./routes/rutasRolesUsuarios.js"
import {createRoles, createFirstDBA} from "./libs/initialSetup.js"
import rutasAuth from './routes/rutasAuth.js';
import ImagenRoutes from "./routes/rutasImagenes.js"
import emailRoutes from "./routes/rutasEmail.js";


const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(cors())
app.use(express.static(path.join(__dirname,'dbimages')))
app.use(express.json())
// app.use("/usuario",UsuarioRoutes)
// app.use("/habitacion",habitacionRoutes)
// app.use("/reservacion",ReservacionRoutes)
app.use("/api/usuario",UsuarioRoutes)
app.use("/api/habitacion",habitacionRoutes)
app.use("/api/reservacion",ReservacionRoutes)
app.use("/api/role",RolesRoutes)
app.use("/api/roleUsuarios",rutasRolesUsuarios)
app.use("/api/auth",rutasAuth)
app.use("/images",ImagenRoutes)
app.use("/enviarcorreo",emailRoutes)
try {
    await db.authenticate()
   
    await db.sync()
    createRoles();
    console.log("Conexion exitosa a la DB")
    createFirstDBA();
   
} catch (error) {
    console.log("El error de conexion es: " + error)
}
 
 
app.listen(8000,()=>{
    console.log("Server up running in http://localhost:8000/")
})