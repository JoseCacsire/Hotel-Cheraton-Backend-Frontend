import UsuarioRoleModel from '../models/UsuarioRoleModel.js';
 
export const getAllUsersRoles = async (req,res) => {
    try {
        const role = await UsuarioRoleModel.findAll()
        res.json(role)
    } catch (error) {
        res.json({message: error.message})
    }
}