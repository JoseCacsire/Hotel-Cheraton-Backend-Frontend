// // importamos la conexion a la base de datos 
// import db from '../database/db.js'
// // importamos sequelize
// import { DataTypes } from 'sequelize'

// const reservacionModel = db.define('reservacion',{
//     idReservacion:{type: DataTypes.NUMBER, primaryKey: true},
//     habitacion:{type: DataTypes.STRING},
//     nombre:{type: DataTypes.STRING},
//     apellido:{type: DataTypes.STRING},
//     correo:{type: DataTypes.STRING},
//     telefono:{type: DataTypes.NUMBER},
//     pais:{type: DataTypes.STRING},
//     ciudad:{type: DataTypes .STRING},
//     direccion:{type: DataTypes.STRING},
//     postal:{type: DataTypes.NUMBER},
//     precio:{type: DataTypes.DOUBLE},
//     horario:{type: DataTypes.STRING},
// },{
//     timestamps: false,
//     freezeTableName: true,
//     tableName: "reservacion",
    
// })
// export default reservacionModel

// importamos la conexion a la base de datos
import db from '../database/db.js'
// importamos sequelize
import { DataTypes } from 'sequelize'
 
const reservacionModel = db.define('reservaciones',{
    idReservacion:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    habitacion:{type: DataTypes.STRING},
    nombre:{type: DataTypes.STRING},
    apellido:{type: DataTypes.STRING},
    correo:{type: DataTypes.STRING},
    telefono:{type: DataTypes.INTEGER},
    pais:{type: DataTypes.STRING},
    ciudad:{type: DataTypes .STRING},
    direccion:{type: DataTypes.STRING},
    postal:{type: DataTypes.INTEGER},
    precio:{type: DataTypes.DOUBLE},
    horario:{type: DataTypes.STRING},
},{
    timestamps: false,
    freezeTableName: true,
    tableName: "reservaciones",
   
})
export default reservacionModel

