// Importa la conexión a la base de datos 
import db from '../database/db.js';
// Importa Sequelize y DataTypes
import { DataTypes } from 'sequelize';

// Define el modelo de roles
const RolesModel = db.define('roles', {
    idRole: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: { type: DataTypes.STRING }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: "roles"
});



export default RolesModel;