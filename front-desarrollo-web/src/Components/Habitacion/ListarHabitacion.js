import axios from 'axios'
import {useState, useEffect} from 'react'
import Menu from '../Menu';

// const URL = 'http://localhost:8000/habitacion'
const URL = 'http://localhost:8000/api/habitacion'

const ListarHabitacion = () => {
    
    const [habitaciones, setHabitaciones] = useState([])
    const [totalHabitaciones, setTotalHabitaciones] = useState(0);
    const [habitacionesCaras, setHabitacionesCaras] = useState(0);
    useEffect(() => {
        getHabitaciones()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getHabitaciones = async () => {
        try {
            // Obtiene el token del almacenamiento local
            const token = localStorage.getItem('x-access-token');
            
            // Configura el token en el encabezado de autorización de axios
            axios.defaults.headers.common['x-access-token'] = token;
            
            const res = await axios.get(URL);
            let contador = 0;

            setTotalHabitaciones(res.data.length);
            setHabitaciones(res.data);

            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].precio8Horas > 45) {
                    contador += 1;
                }
            }

            setHabitacionesCaras(contador);
        } catch (error) {
            console.error('Error al obtener las habitaciones:', error);
            // Manejar el error
        }
    };

    const eliminarHabitacion = async (idHabitacion) =>{
        try {
            await axios.delete(`${URL}/${idHabitacion}`);
            getHabitaciones();
        } catch (error) {
            console.error('Error al eliminar la habitación:', error);
            // Manejar el error
        }
    }

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
                                        <h3> Habitaciones </h3>
                                    </div>
                                    <div class="col-md-4 text-end">
                                        <a class="btn btn-primary btn-agregar" href='http://localhost:3000/habitaciones/create'>
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
                                            <th>NUMERO</th>
                                            <th>PISO</th>
                                            <th>DESCRIPCION</th>
                                            <th>S/. 8 HORAS</th>
                                            <th>S/. 1 DIA</th>
                                            <th>ESTADO</th>
                                            <th>ACCIONES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {habitaciones.map( (habitacion,key) => (
                                            <tr key={key}>
                                                <td>{habitacion.idHabitacion}</td>
                                                <td>{habitacion.numeroHabitacion}</td>
                                                <td>{habitacion.piso}</td>
                                                <td>{habitacion.descripcion}</td>
                                                <td>{habitacion.precio8Horas}</td>
                                                <td>{habitacion.precioDia}</td>
                                                <td>{habitacion.estado}</td>
                                                <td>
                                                    <a class="btn btn-warning mx-2" href={`http://localhost:3000/habitaciones/update/${habitacion.idHabitacion}`}>
                                                        <i class="fa-solid fa-pen-to-square"></i>
                                                    </a>  
                                                    <button className='btn btn-danger mx-2' onClick={() => eliminarHabitacion(habitacion.idHabitacion)}>
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
                                <h3> Habitaciones Caras </h3>
                                <h4> 
                                    <i class="fa-solid fa-shop"></i>
                                    <span class="mx-2">{habitacionesCaras}</span>
                                </h4>
                            </div>
                        </div>
                        <div class="card text-center bg-success text-white mb-3">
                            <div class="card-body">
                                <h3> Total Habitaciones </h3>
                                <h4> 
                                    <i class="fa-solid fa-shop"></i>
                                    <span class="mx-2">{totalHabitaciones}</span>
                                </h4>
                            </div>
                        </div>
                        <div class="card text-center bg-secondary text-white mb-3">
                            <div class="card-body">
                                <h3> Habitaciones Eliminados </h3>
                                <h4> 
                                    <i class="fa-solid fa-shop-slash"></i>
                                </h4>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
};

export default ListarHabitacion;