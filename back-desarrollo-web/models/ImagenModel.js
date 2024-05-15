// Imagen.js

import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const ImagenModel = db.define('imagen', {
  idImagen: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true},
  tipo: {
    type: DataTypes.STRING(200)},
  nombre: {
    type: DataTypes.STRING(200)},
  data: {
    type: DataTypes.BLOB('long') }
},{
    timestamps: false,
    freezeTableName: true,
    tableName: "imagen",
 
});

export default ImagenModel;
