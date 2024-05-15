import HabitacionModel from '../models/HabitacionModel.js'

//****metodos para crud****

//Listar registros

export const getAllHabitacion = async (req,res) => {
    try {
        const habitacion = await HabitacionModel.findAll()
        res.json(habitacion)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Retornar un registro

export const getHabitacionById = async (req,res) => {
    try {
        const habitacion = await HabitacionModel.findAll({where:{idHabitacion: req.params.idHabitacion}})
        res.json(habitacion[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crear un registro

export const createHabitacion = async (req, res) => {
    try {
        await HabitacionModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actualizar un registro

export const updateHabitacion = async (req, res) => {
    try {
        await HabitacionModel.update(req.body, {where : {idHabitacion: req.params.idHabitacion}})
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
//Eliminar un registro
export const deleteHabitacion = async (req, res) => {
    try {
        await HabitacionModel.destroy({where: { idHabitacion : req.params.idHabitacion }})
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}