import ReservacionModel from '../models/ReservacionModel.js'
//****metodos para crud****

//Listar registros

export const getAllReservacion = async (req,res) => {
    try {
        const reservacion = await ReservacionModel.findAll()
        res.json(reservacion)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Retornar un registro

export const getReservacionById = async (req,res) => {
    try {
        const reservacion = await ReservacionModel.findAll({where:{idReservacion: req.params.idReservacion}})
        res.json(reservacion[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crear un registro

export const createReservacion = async (req, res) => {
    try {
        await ReservacionModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actualizar un registro

export const updateReservacion = async (req, res) => {
    try {
        await ReservacionModel.update(req.body, {where : {idReservacion: req.params.idReservacion}})
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
//Eliminar un registro
export const deleteReservacion = async (req, res) => {
    try {
        await ReservacionModel.destroy({where: { idReservacion : req.params.idReservacion }})
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

