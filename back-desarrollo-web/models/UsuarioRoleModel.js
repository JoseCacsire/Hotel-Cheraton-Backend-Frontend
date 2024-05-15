// Importa la conexión a la base de datos
import db from '../database/db.js';
// Importa Sequelize y DataTypes
import { DataTypes } from 'sequelize';
import UsuarioModel from './UsuarioModel.js';
import RolesModel from './RolesModel.js';

// Define el modelo de la relación entre usuarios y roles
const UsuarioRoleModel = db.define('usuario_roles', {
    idUsuario: { type: DataTypes.INTEGER, primaryKey: true },
    idRole: { type: DataTypes.INTEGER, primaryKey: true }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: "usuario_roles"
});

UsuarioModel.belongsToMany(RolesModel, { through: UsuarioRoleModel, foreignKey: 'idUsuario' });
RolesModel.belongsToMany(UsuarioModel, { through: UsuarioRoleModel, foreignKey: 'idRole' });


export default UsuarioRoleModel;
