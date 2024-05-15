// ARCHIVO CONTROLLER

import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import ImagenModel from '../models/ImagenModel.js'



export const createImage = async (req, res) => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const tipo = req.file.mimetype
        const nombre = req.file.originalname
        const data = fs.readFileSync(path.join(__dirname, "../images/" + req.file.filename));
        console.log(req.file); // Verifica si `req.file` contiene la información del archivo subido
        console.log(req.file.filename); // Verifica si `req.file` contiene la información del archivo subido
        await ImagenModel.create({
            tipo: tipo,
            nombre: nombre,
            data: data
        })
        res.json({
            "message": "Registro creado correctamente"
        });
    } catch (error) {
        console.log(req.file.filename);
        console.error("Error al crear la imagen:", error);
        res.status(500).json({ message: "Error al crear la imagen: " + error.message });
    }
};
export const getAllImagenes = async (req, res) => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const imagenes = await ImagenModel.findAll();

        const imagenesDir = [];
        imagenes.forEach((img, index) => {
            const filename = `image_${index}.png`;
            fs.writeFileSync(path.join(__dirname, `../dbimages/${filename}`), img.data);
            imagenesDir.push(filename);
        });

        res.json(
            // message: "Imágenes recuperadas correctamente,pepe",
            imagenesDir
    );
    } catch (error) {
        console.error("Error al recuperar las imágenes:", error);
        res.status(500).json({ message: "Error al recuperar las imágenes: " + error.message });
    }
};
