import axios from 'axios'
import {useState, useEffect} from 'react'
import Menu from '../Menu';

// const URL = 'http://localhost:8000/usuario'
const URL = 'http://localhost:8000/api/usuario'

const ListarUsuario = () => {
    
    const [usuarios, setUsuarios] = useState([])
    const [totalUsuarios, setTotalUsuarios] = useState(0);
    useEffect(() => {
        getUsuarios()
    },[])

    const getUsuarios = async () => {
        try {
            const token = localStorage.getItem('x-access-token'); // Obtener el token almacenado en el localStorage
            const config = {
                headers: {
                    'x-access-token': token // Agregar el token al encabezado de la solicitud
                }
            };
            const res = await axios.get(URL, config);
            setTotalUsuarios(res.data.length);
            setUsuarios(res.data);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };

    const eliminarUsuario = async (idUsuario) =>{
        try {
            const token = localStorage.getItem('x-access-token'); // Obtener el token almacenado en el localStorage
            const config = {
                headers: {
                    'x-access-token': token // Agregar el token al encabezado de la solicitud
                }
            };
            await axios.delete(`${URL}/${idUsuario}`, config);
            getUsuarios();
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
        }
    };

    return(
        <div>
            <Menu/>
            <div className='container'>
                <div class="row mt-3">
                    <div class="col-md-9 mb-3">
                        <div class="card border-0">
                            <div class="card-header text-center py-4">
                                <div class="row">
                                    <div class="col-md-8 text-start">
                                        <h3> Usuarios </h3>
                                    </div>
                                    <div class="col-md-4 text-end">
                                        <a class="btn btn-primary btn-agregar" href='http://localhost:3000/usuarios/create'>
                                            AGREGAR
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table border="1" id="ejemplo1" class="table align-middle mb-0 bg-white table-hover table-borderless border-0">
                                    <thead class="table-secondary">
                                        <tr>
                                            <th>ID</th>
                                            <th>NOMBRE</th>
                                            <th>APELLIDO</th>
                                            <th>TELEFONO</th>
                                            <th>CORREO</th>
                                            <th>ACCIONES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {usuarios.map( (usuario,key) => (
                                            <tr key={key}>
                                                <td>{usuario.idUsuario}</td>
                                                <td>{usuario.nombre}</td>
                                                <td>{usuario.apellido}</td>
                                                <td>{usuario.telefono}</td>
                                                <td>{usuario.correo}</td>
                                                <td>
                                                    <a class="btn btn-warning mx-2" href={`http://localhost:3000/usuarios/update/${usuario.idUsuario}`}>
                                                        <i class="fa-solid fa-pen-to-square"></i>
                                                    </a>  
                                                    <button className='btn btn-danger mx-2' onClick={() => eliminarUsuario(usuario.idUsuario)}>
                                                        <i class="fa-solid fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card text-center bg-danger text-white mb-3">
                            <div class="card-body">
                                <h3> Usuarios Peruanos </h3>
                                <h4> 
                                    <i class="fa-solid fa-user-ninja"></i>
                                
                                </h4>
                            </div>
                        </div>
                        <div class="card text-center bg-success text-white mb-3">
                            <div class="card-body">
                                <h3> Total Usuarios </h3>
                                <h4> 
                                    <i class="fas fa-users"></i>
                                    <span class="mx-2">{totalUsuarios}</span>
                                </h4>
                            </div>
                        </div>
                        <div class="card text-center bg-secondary text-white mb-3">
                            <div class="card-body">
                                <h3> Usuarios Eliminados </h3>
                                <h4> 
                                    <i class="fa-solid fa-users-slash"></i>
                            
                                </h4>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
};

export default ListarUsuario;