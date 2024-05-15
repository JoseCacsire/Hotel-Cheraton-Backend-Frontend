import UsuarioModel from '../models/UsuarioModel.js'
import RolesModel from '../models/RolesModel.js';

//****metodos para crud****

//Listar registros

export const getAllUsuario = async (req, res) => {
    try {
        const usuario = await UsuarioModel.findAll()
        res.json(usuario)
    } catch (error) {
        res.json({ message: error.message })

    }
}

//Retornar un registro
export const getUsuarioById = async (req, res) => {
    try {
        const usuario = await UsuarioModel.findAll({ where: { idUsuario: req.params.idUsuario } })
        res.json(usuario[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Retornar un registro
export const getUsuarioByEmail = async (req, res) => {
    try {
        const usuario = await UsuarioModel.findAll({ where: { correo: req.params.correo } })
        res.json(usuario[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Retornar registro por correo y contrasena

export const retornarUsuario = async (req, res) => {
    try {
        const usuario = await UsuarioModel.findAll({ where: { correo: req.params.correo, contrasena: req.params.contrasena } })
        res.json(usuario[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Crear un registro
// export const createUsuario = async (req, res) => {
//     try {
//         await UsuarioModel.create(req.body)
//         res.json({
//             "message":"Registro creado correctamente"
//         })
//     } catch (error) {
//         res.json({message: error.message})
//     }
// }

//Crear un registro 2
export const createUsuario = async (req, res) => {
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
            contrasena
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

//Actualizar un registro
// export const updateUsuario = async (req, res) => {
//     try {
//         await UsuarioModel.update(req.body, { where: { idUsuario: req.params.idUsuario } })
//         res.json({
//             "message": "Registro actualizado correctamente"
//         })
//     } catch (error) {
//         res.json({ message: error.message })
//     }
// }

//Actualizar un registro 2
export const updateUsuario = async (req, res) => {
    try {
        const { nombre, apellido, telefono, correo, contrasena, roles } = req.body;

        // Verificar si el usuario a actualizar existe
        const existingUser = await UsuarioModel.findOne({ where: { idUsuario: req.params.idUsuario } });
        if (!existingUser) {
            return res.status(404).json({ error: 'El usuario no existe' });
        }

        // Limpiar roles existentes del usuario
        await existingUser.setRoles([]);

        // Actualizar los campos del usuario
        await existingUser.update({
            nombre,
            apellido,
            telefono,
            correo,
            contrasena
        });

        // Actualizar roles del usuario si se proporcionaron
        if (roles) {
            const rolesToUpdate = [];

            // Agregar nuevos roles proporcionados en la solicitud y sus roles adicionales
            for (const roleName of roles) {
                const role = await RolesModel.findOne({ where: { nombre: roleName } });
                if (role) {
                    rolesToUpdate.push(role);

                    // Agregar roles adicionales según las especificaciones
                    if (roleName === "DBA") {
                        const userRole = await RolesModel.findOne({ where: { nombre: "Usuario" } });
                        const adminRole = await RolesModel.findOne({ where: { nombre: "Administrador" } });
                        const limpiezaRole = await RolesModel.findOne({ where: { nombre: "Limpieza" } });
                        if (userRole) rolesToUpdate.push(userRole);
                        if (adminRole) rolesToUpdate.push(adminRole);
                        if (limpiezaRole) rolesToUpdate.push(limpiezaRole);
                    } else if (roleName === "Administrador") {
                        const userRole = await RolesModel.findOne({ where: { nombre: "Usuario" } });
                        if (userRole) rolesToUpdate.push(userRole);
                    } else if (roleName === "Limpieza") {
                        const userRole = await RolesModel.findOne({ where: { nombre: "Usuario" } });
                        if (userRole) rolesToUpdate.push(userRole);
                    }
                }
            }

            await existingUser.setRoles(rolesToUpdate);
        }

        res.status(200).json({ message: "Usuario actualizado correctamente" });
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).json({ error: 'Error al actualizar usuario' });
    }
};

//Eliminar un registro
export const deleteUsuario = async (req, res) => {
    try {
        await UsuarioModel.destroy({ where: { idUsuario: req.params.idUsuario } })
        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}


