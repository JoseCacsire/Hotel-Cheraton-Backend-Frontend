// importamos la conexion a la base de datos 
import db from '../database/db.js'
// importamos sequelize
import { DataTypes } from 'sequelize'

const usuarioModel = db.define('usuarios',{
    idUsuario:{type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true},
    nombre:{type: DataTypes.STRING},
    apellido:{type: DataTypes.STRING},
    telefono:{type: DataTypes.INTEGER},
    correo:{type: DataTypes.STRING},
    contrasena:{type: DataTypes.STRING}
},{
    timestamps: false,
    freezeTableName: true,
    tableName: "usuarios",
    
})


export default usuarioModel
