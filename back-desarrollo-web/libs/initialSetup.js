import RolesModel from "../models/RolesModel.js";
import UsuarioModel from "../models/UsuarioModel.js";
 
export const createRoles = async () => {
    try {
        const count = await RolesModel.count();
 
        if (count > 0) return;
 
        const rolesToCreate = [
            { nombre: "Usuario" },
            { nombre: "Administrador" },
            { nombre: "DBA" },
            { nombre: "Limpieza"}
        ];
 
        const createdRoles = await Promise.all(rolesToCreate.map(role => RolesModel.create(role)));
 
        console.log(createdRoles);
    } catch (error) {
        console.error('Error al crear roles:', error);
    }
}
 
export const createFirstDBA = async () => {
    try {
 
        const count = await UsuarioModel.count();
 
        if (count > 0) return;
 
        // const contrasenaCifrada = await UsuarioModel.encryptPassword("diego123");
 
        // Crea el usuario
        const usuario = await UsuarioModel.create({
            nombre: "First",
            apellido: "Bad",
            telefono: 923446878,
            correo: "egobadentoxis@gmail.com",
            contrasena: "bad2024"// Deberías cifrar la contraseña antes de almacenarla en la base de datos
        });
 
        // Obtiene todos los roles
        const roles = await RolesModel.findAll();
 
        // Asigna todos los roles al usuario
        await usuario.setRoles(roles);
 
        console.log("Usuario creado con todos los roles:", usuario);
    } catch (error) {
        console.error('Error al crear usuario con roles:', error);
    }
};