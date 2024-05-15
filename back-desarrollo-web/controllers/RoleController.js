import RolesModel from '../models/RolesModel.js';
 
export const getAllRole = async (req,res) => {
    try {
        const role = await RolesModel.findAll()
        res.json(role)
    } catch (error) {
        res.json({message: error.message})
    }
}