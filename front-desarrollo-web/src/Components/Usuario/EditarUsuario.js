import axios from "axios"
import {useEffect, useState} from "react"
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../Menu";

// const URL = 'http://localhost:8000/usuario'
const URL = 'http://localhost:8000/api/usuario';

const EditarUsuario = () => {

    const [nombre,setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono,setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [contrasena,setContrasena] = useState('')
    const [rol, setRol] = useState('Usuario'); // Valor por defecto
    const navigate = useNavigate()
    const {idUsuario} = useParams()

    const update = async (e) => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('x-access-token');
            const config = {
                headers: {
                    'x-access-token': token
                }
            };
            await axios.put(`${URL}/${idUsuario}`, {
                nombre,
                apellido,
                telefono,
                correo,
                contrasena,
                roles: [rol] // Enviamos solo un rol, como en el registro
            }, config);
            navigate('/usuarios');
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
        }
    };

    useEffect(() => {
        getUsuarioById()
    //eslint-disable-next-line
    },[])

    const getUsuarioById = async () => {
        try {
            const token = localStorage.getItem('x-access-token');
            const config = {
                headers: {
                    'x-access-token': token
                }
            };
            const res = await axios.get(`${URL}/${idUsuario}`, config);
            setNombre(res.data.nombre);
            setApellido(res.data.apellido);
            setTelefono(res.data.telefono);
            setCorreo(res.data.correo);
            setContrasena(res.data.contrasena);
            setRol(res.data.roles[0].nombre); // Solo tomamos el primer rol por simplicidad
        } catch (error) {
            console.error('Error al obtener usuario:', error);
        }
    };

    return (
        <div>
            <Menu/>
            <div class="container">
                <form class="row" onSubmit={update}>
                    <div class="col-7 mx-auto">
                        <div class="row">
                            <legend class="text-center header fs-2 mt-5">Editar Usuario</legend>
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
                                        <input type="radio" value="" checked={rol === ''} onChange={() => setRol('')}/>
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

export default EditarUsuario;