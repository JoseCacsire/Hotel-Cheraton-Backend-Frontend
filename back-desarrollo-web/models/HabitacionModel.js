// // importamos la conexion a la base de datos 
// import db from '../database/db.js'
// // importamos sequelize
// import { DataTypes } from 'sequelize'

// const HabitacionModel = db.define('habitacion',{
//     idHabitacion:{type: DataTypes.NUMBER, primaryKey: true},
//     numeroHabitacion:{type: DataTypes.NUMBER},
//     piso:{type: DataTypes.NUMBER},
//     descripcion:{type: DataTypes.NUMBER},
//     precio8Horas:{type: DataTypes.DOUBLE},
//     precioDia:{type: DataTypes.DOUBLE},
//     estado:{type: DataTypes.STRING}
// },{
//     timestamps: false,
//     freezeTableName: true,
//     tableName: "habitacion",
    
// })
// export default HabitacionModel

// importamos la conexion a la base de datos
import db from '../database/db.js'
// importamos sequelize
import { DataTypes } from 'sequelize'
 
const HabitacionModel = db.define('habitaciones',{
    idHabitacion:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    numeroHabitacion:{type: DataTypes.INTEGER},
    piso:{type: DataTypes.INTEGER},
    descripcion:{type: DataTypes.STRING},
    precio8Horas:{type: DataTypes.DOUBLE},
    precioDia:{type: DataTypes.DOUBLE},
    estado:{type: DataTypes.STRING}
},{
    timestamps: false,
    freezeTableName: true,
    tableName: "habitaciones",
   
})
export default HabitacionModel;