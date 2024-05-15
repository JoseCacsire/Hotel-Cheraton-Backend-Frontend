import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
// import "../css/login.css"

const URL2 = 'http://localhost:8000/api/auth';


const Login = () => {
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${URL2}/login`, { correo, contrasena });
            const token = response.data.token;
            
            // Establece el token en el encabezado de autorización
            axios.defaults.headers.common['x-access-token'] = token;
    
            // Almacena el token en el almacenamiento local o en las cookies
            localStorage.setItem('x-access-token', token);
    
            // Redirige al usuario a la página de inicio
            navigate('/inicio');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            // Manejar el error de inicio de sesión
            alert('Error al iniciar sesión. Verifica tus credenciales e intenta nuevamente.');
        }
    };

    const handleRecuperarContrasena = () => {
        // Aquí puedes abrir un modal o navegar a otra ruta para recuperar la contraseña
        navigate("/recuperarcontrasena")
    }

    //lo mismo q handleSubmit
    // const validacion = async (e) => {
    //     e.preventDefault()
    //     const res = await axios.get(`${URL1}/${correo}/${contrasena}`)
    //     if (res.data && correo !== "" && contrasena !== "") { alert("Bienvenido al Sistema!!!"); navigate("/inicio") }
    //     else alert("Datos Incorrectos!!!")
    // }

    return (
        <div class="imagenLogin">
            <div class="container-fluid vh-100 d-flex justify-content-center align-items-center">
                <div class="col-12">
                    <div class="rounded d-flex justify-content-center">
                        <div class="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
                            <div class="text-center">
                                <h3 class="text-dark">Iniciar Sesión</h3>
                            </div>
                            <form onSubmit={handleSubmit} >
                                <div class="p-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text bg-dark"><i
                                            class="bi bi-person-plus-fill text-white"></i></span>
                                        <input value={correo} onChange={e => setCorreo(e.target.value)} type="email" class="form-control" placeholder="Email" />
                                    </div>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text bg-dark"><i
                                            class="bi bi-key-fill text-white"></i></span>
                                        <input value={contrasena} onChange={e => setContrasena(e.target.value)} type="password" class="form-control" placeholder="Contraseña" />
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Recordar contraseña
                                        </label>
                                    </div>
                                    <div class="text-center col-12">
                                        <button class="btn btn-dark w-100 text-center mt-4" type="submit">
                                            Ingresar
                                        </button>
                                    </div>
                                    <div className="text-center col-12 mt-2">
                                        <button className="btn btn-link" onClick={handleRecuperarContrasena}>
                                            <i className="bi bi-lock-fill me-2"></i>Recuperar contraseña
                                        </button>
                                        <a className="text-dark text-decoration-none ms-2" href="http://localhost:3000/">Cancelar</a>
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

export default Login;