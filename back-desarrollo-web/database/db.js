// para arrancar el backend node app.js
//mejor usa nodemon app.js te muestra los cambios en vivo

// ARCHIVO DB.JS
import {Sequelize} from 'sequelize'

const db = new Sequelize('db_web_hotel','root','1234',{
    host:'localhost',
    dialect:'mysql'
})

export default db;