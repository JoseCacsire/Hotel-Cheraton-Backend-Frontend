import jwt from 'jsonwebtoken'
import config from '../config.js'
import UsuarioModel from '../models/UsuarioModel.js'
import RolesModel from '../models/RolesModel.js'
import UsuarioRoleModel from '../models/UsuarioRoleModel.js'
 
export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
 
        if (!token) {
            return res.status(403).json({ message: "Token es requerido" });
        }
 
        const decoded = jwt.verify(token, config.SECRET);
        console.log(decoded);
        req.idUsuario = decoded.idUsuario;
        console.log(req.idUsuario);
 
        const user = await UsuarioModel.findOne({ where: { idUsuario: req.idUsuario } }, { contrasena: 0 });
 
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
 
        next();
    } catch (err) {
        console.error(err);
        return res.status(401).json({ message: "Error verificacion" });
    }
};
 
export const checkDBARole = async (req, res, next) => {
    try {
        // Obtener el usuario actual
        const user = await UsuarioModel.findByPk(req.idUsuario);
 
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
 
        // Obtener roles del usuario
        const roles = await user.getRoles();
 
        // Verificar si el usuario tiene el rol "DBA"
        const hasDBARole = roles.some(role => role.nombre === "DBA");
 
        if (hasDBARole) {
            // El usuario tiene el rol "DBA", continuar con la ejecución
            next();
        } else {
            // El usuario no tiene el rol "DBA", devolver acceso no autorizado
            return res.status(401).json({ message: "Acceso no autorizado" });
        }
    } catch(err) {
        console.error(err);
        return res.status(401).json({ message: "Error DBA" });
    }
};
 
export const checkAdminRole = async (req, res, next) => {
    try {
        // Obtener el usuario actual
        const user = await UsuarioModel.findByPk(req.idUsuario);
 
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
 
        // Obtener roles del usuario
        const roles = await user.getRoles();
 
        // Verificar si el usuario tiene el rol "DBA"
        const hasDBARole = roles.some(role => role.nombre === "Administrador");
 
        if (hasDBARole) {
            next();
        } else {
            return res.status(401).json({ message: "Acceso no autorizado" });
        }
    } catch(err) {
        console.error(err);
        return res.status(401).json({ message: "Error DBA" });
    }
};
 
export const checkLimpiezaRole = async (req, res, next) => {
    try {
        // Obtener el usuario actual
        const user = await UsuarioModel.findByPk(req.idUsuario);
 
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
 
        // Obtener roles del usuario
        const roles = await user.getRoles();
 
        // Verificar si el usuario tiene el rol "DBA"
        const hasDBARole = roles.some(role => role.nombre === "Limpieza");
 
        if (hasDBARole) {
            next();
        } else {
            return res.status(401).json({ message: "Acceso no autorizado" });
        }
    } catch(err) {
        console.error(err);
        return res.status(401).json({ message: "Error Limpieza" });
    }
};

export const checkUsuarioRole = async (req, res, next) => {
    try {
        // Obtener el usuario actual
        const user = await UsuarioModel.findByPk(req.idUsuario);
 
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
 
        // Obtener roles del usuario
        const roles = await user.getRoles();
 
        // Verificar si el usuario tiene el rol "DBA"
        const hasDBARole = roles.some(role => role.nombre === "Usuario");
 
        if (hasDBARole) {
            next();
        } else {
            return res.status(401).json({ message: "Acceso no autorizado" });
        }
    } catch(err) {
        console.error(err);
        return res.status(401).json({ message: "Error Usuario" });
    }
};