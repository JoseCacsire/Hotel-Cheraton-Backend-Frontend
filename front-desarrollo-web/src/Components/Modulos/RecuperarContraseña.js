import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const URL = 'http://localhost:8000/api/usuario'

const RecuperarContraseña = () => {
    const [correo, setCorreo] = useState('')
    const navigate = useNavigate()
    // const [contrasena, setContrasena] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            console.log(correo)
            const res = await axios.get(`${URL}/correo/${correo}`)
            const contrasena = res.data.contrasena
            console.log("Contraseña: ", contrasena)

            // Verificar si el correo está vacío o nulo
            if (!res.data || !res.data.contrasena) {
                alert('Por favor ingrese un correo válido.');
                return; // Detener la ejecución del resto de la función
            }

            const response = await fetch('http://localhost:8000/enviarcorreo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo, contrasena }),
            });

            if (response.ok) {
                alert('Correo enviado correctamente');
                navigate("/login")    
            } else {
                throw new Error('Error al enviar el correo');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al enviar el correo');
        }
    };

    return (
        <div class="imagenLogin">
            <div class="container-fluid vh-100 d-flex justify-content-center align-items-center">
                <div class="col-12">
                    <div class="rounded d-flex justify-content-center">
                        <div class="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
                            <div class="text-center">
                                <h3 class="text-dark">Recuperar Contraseña</h3>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div class="p-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text bg-dark"><i
                                            class="bi bi-person-plus-fill text-white"></i></span>
                                        <input
                                            value={correo}
                                            onChange={e => setCorreo(e.target.value)}
                                            type="email" class="form-control"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div class="text-center col-12">
                                        <button class="btn btn-dark w-100 text-center mt-4" type="submit">
                                            Enviar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecuperarContraseña;