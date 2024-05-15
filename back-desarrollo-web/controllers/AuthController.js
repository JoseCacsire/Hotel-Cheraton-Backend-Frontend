import config from '../config.js';
import UsuarioModel from '../models/UsuarioModel.js';
import RolesModel from '../models/RolesModel.js';
import jwt from 'jsonwebtoken';
 
 
export const signUp = async (req, res) => {
    try {
        const { nombre, apellido, telefono, correo, contrasena, roles } = req.body;
        const existingUser = await UsuarioModel.findOne({ where: { correo } });
        if (existingUser) {
            return res.status(400).json({ error: 'El correo ya está registrado' });
        }
 
        const newUser = await UsuarioModel.create({
            nombre,
            apellido,
            telefono,
            correo,
            contrasena,
            // contrasena: await UsuarioModel.encryptPassword(contrasena)
        });
 
        const defaultRole = await RolesModel.findOne({ where: { nombre: "Usuario" } });
 
        let additionalRoles = [];
 
        if (roles) {
            if (roles.includes("DBA")) {
                const dbaRole = await RolesModel.findOne({ where: { nombre: "DBA" } });
                const adminRole = await RolesModel.findOne({ where: { nombre: "Administrador" } });
                const limpiezaRole = await RolesModel.findOne({ where: { nombre: "Limpieza" } });
                additionalRoles.push(dbaRole, adminRole, limpiezaRole);
            } else if (roles.includes("Administrador")) {
                const adminRole = await RolesModel.findOne({ where: { nombre: "Administrador" } });
                additionalRoles.push(adminRole);
            } else if (roles.includes("Limpieza")) {
                const limpiezaRole = await RolesModel.findOne({ where: { nombre: "Limpieza" } });
                additionalRoles.push(limpiezaRole);
            }
        }
 
        const rolesToAssign = [defaultRole, ...additionalRoles];
 
        await newUser.setRoles(rolesToAssign);
 
        res.status(200).json({ message: "Usuario Registrado" });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ error: 'Error al crear usuario' });
    }
};
 


export const login = async (req, res) => {
    try {
        // Busca un usuario por correo electrónico en la base de datos
        const userFound = await UsuarioModel.findOne({ where: { correo: req.body.correo } });

        // Si no se encuentra ningún usuario, devuelve un error
        if (!userFound) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }

        // Verificar si la contraseña coincide con la almacenada en la base de datos
        if (req.body.contrasena !== userFound.contrasena) {
            return res.status(401).json({ token: null, message: "Contraseña inválida" });
        }

        // Si la contraseña coincide, firma el token de autenticación
        const token = jwt.sign({ idUsuario: userFound.idUsuario }, config.SECRET, {
            expiresIn: 86400
        });

        return res.status(200).json({ token });
        
    } catch (error) {
        console.error("Error durante el inicio de sesión:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};