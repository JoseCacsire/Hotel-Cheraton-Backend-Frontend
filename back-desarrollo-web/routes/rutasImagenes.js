// ARCHIVO RUTASIMAGENES.JS
import express from 'express';
import { createImage,getAllImagenes } from '../controllers/ImagenesController.js';
import { fileURLToPath } from 'url';
import {dirname,join} from 'path';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ImagenRoutes = express.Router();
const diskstorage = multer.diskStorage({
    destination: join(__dirname, '../images'),
    filename: (req, file, cb) => {
        // de esta forma se guardara la imagen en la carpeta images
        cb(null, Date.now() + '-monkeywit-' + file.originalname);
    }
});

const fileUpload = multer({
    storage: diskstorage
}).single('image');

// Agrega la siguiente línea para servir las imágenes estáticas
ImagenRoutes.use('/images', express.static(join(__dirname, '../dbimages')));


ImagenRoutes.post('/', fileUpload, createImage);
ImagenRoutes.get('/get',getAllImagenes);
export default ImagenRoutes;
