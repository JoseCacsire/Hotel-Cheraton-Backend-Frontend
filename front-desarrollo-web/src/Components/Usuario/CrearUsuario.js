import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu';

// const URL = 'http://localhost:8000/usuario'
const URL = 'http://localhost:8000/api/usuario';

const CrearUsuario = () => {

    const [nombre,setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono,setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [contrasena,setContrasena] = useState('')
    const [rol, setRol] = useState('Usuario'); // Valor por defecto
    const navigate = useNavigate()

    const store = async(e) => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('x-access-token');
            const config = {
                headers: {
                    'x-access-token': token
                }
            };
            await axios.post(URL, {
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                correo: correo,
                contrasena: contrasena,
                roles: rol // Enviamos el rol seleccionado en el cuerpo de la solicitud
            }, config);
            navigate("/usuarios");
        } catch (error) {
            console.error('Error al crear usuario:', error);
        }
    };

    return (
        <div>
            <Menu/>
            <div class="container">
                <form class="row" onSubmit={store}>
                    <div class="col-7 mx-auto">
                        <div class="row">
                            <legend class="text-center header fs-2 mt-5">Registrar Usuario</legend>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa fa-user bigicon"></i>
                            </h3>
                            <div class="col-11 my-3">
                                <input value={nombre} onChange={e => setNombre(e.target.value)} type="text" placeholder="First Name" class="form-control"/>
                            </div>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa fa-user bigicon"></i>
                            </h3>
                            <div class="col-11 my-3">
                                <input value={apellido} onChange={e => setApellido(e.target.value)} type="text" placeholder="Last Name" class="form-control"/>
                            </div>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-mobile-screen"></i>
                            </h3>
                            <div class="col-11 my-3">
                                <input value={telefono} onChange={e => setTelefono(e.target.value)} type="number" placeholder="Telephone" class="form-control"/>
                            </div>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-envelope"></i>
                            </h3>
                            <div class="col-11 my-3">
                                <input value={correo} onChange={e => setCorreo(e.target.value)} type="email" placeholder="Email" class="form-control"/>
                            </div>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-lock"></i>
                            </h3>
                            <div class="col-11 my-3">
                                <input value={contrasena} onChange={e => setContrasena(e.target.value)} type="password" placeholder="Passoword" class="form-control"/>
                            </div>
                            <div className="col-12 my-3 d-flex justify-content-center align-items-center">
                                <div className="col-11">
                                    <label className="d-block">
                                        <input type="radio" value="Administrador" checked={rol === 'Administrador'} onChange={() => setRol('Administrador')} />
                                        Administrador
                                    </label>
                                    <label className="d-block">
                                        <input type="radio" value="DBA" checked={rol === 'DBA'} onChange={() => setRol('DBA')} />
                                        DBA
                                    </label>
                                    <label className="d-block">
                                        <input type="radio" value="Limpieza" checked={rol === 'Limpieza'} onChange={() => setRol('Limpieza')} />
                                        Limpieza
                                    </label>
                                    <label className="d-block">
                                        <input type="radio" value="" checked={rol === ''} onChange={() => setRol('')} />
                                        Usuario
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-12 text-center my-3">
                                <button type="submit" class="btn btn-primary btn-lg">Guardar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CrearUsuario;