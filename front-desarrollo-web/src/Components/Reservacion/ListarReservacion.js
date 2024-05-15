import axios from 'axios'
import {useState, useEffect} from 'react'
import Menu from '../Menu';

// const URL = 'http://localhost:8000/reservacion'
const URL = 'http://localhost:8000/api/reservacion';
const ListarReservacion = () => {
    
    const [reservaciones, setReservaciones] = useState([])
    const [totalReservaciones, setTotalReservaciones] = useState(0);
    // const [habitacionesCaras, setHabitacionesCaras] = useState(0);
    useEffect(() => {
        getReservaciones()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getReservaciones = async () => {
        try {
            const token = localStorage.getItem('x-access-token');
            axios.defaults.headers.common['x-access-token'] = token;
            const res = await axios.get(URL);
            setTotalReservaciones(res.data.length);
            setReservaciones(res.data);
        } catch (error) {
            console.error('Error al obtener las reservaciones:', error);
        }
    }

    const eliminarReservacion = async (idReservacion) =>{
        try {
            const token = localStorage.getItem('x-access-token');
            axios.defaults.headers.common['x-access-token'] = token;
            await axios.delete(`${URL}/${idReservacion}`);
            getReservaciones();
        } catch (error) {
            console.error('Error al eliminar la reservación:', error);
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
                                        <h3> Reservaciones </h3>
                                    </div>
                                    <div class="col-md-4 text-end">
                                        <a class="btn btn-primary btn-agregar" href='http://localhost:3000/reservaciones/create'>
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
                                            <th>HABITACION</th>
                                            <th>NOMBRE</th>
                                            <th>APELLIDO</th>
                                            <th>CORREO</th>
                                            <th>TELEFONO</th>
                                            <th>PAIS</th>
                                            <th>CIUDAD</th>
                                            {/* Codigo agregado */}
                                            <th>DIRECCION</th>
                                            <th>POSTAL</th>
                                            <th>PRECIO</th>
                                            <th>HORARIO</th>
                                            {/* <th>ESTADO</th>  */}
                                            {/*  */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {reservaciones.map( (reservacion,key) => (
                                            <tr key={key}>
                                                <td>{reservacion.idReservacion}</td>
                                                <td>{reservacion.habitacion}</td>
                                                <td>{reservacion.nombre}</td>
                                                <td>{reservacion.apellido}</td>
                                                <td>{reservacion.correo}</td>
                                                <td>{reservacion.telefono}</td>
                                                <td>{reservacion.pais}</td>
                                                {/* Agregando codigo */}
                                                <td>{reservacion.ciudad}</td>
                                                <td>{reservacion.direccion}</td>
                                                <td>{reservacion.postal}</td>
                                                <td>{reservacion.precio}</td>
                                                <td>{reservacion.horario}</td>
                                                {/* <td>{reservacion.estado}</td> */}

                                                <td>
                                                    <a class="btn btn-warning mx-2" href={`http://localhost:3000/reservaciones/update/${reservacion.idReservacion}`}>
                                                        <i class="fa-solid fa-pen-to-square"></i>
                                                    </a>  
                                                    <button className='btn btn-danger mx-2' onClick={() => eliminarReservacion(reservacion.idReservacion)}>
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
                        {/* <div class="card text-center bg-danger text-white mb-3">
                            <div class="card-body">
                                <h3> Habitaciones Caras </h3>
                                <h4> 
                                    <i class="fa-solid fa-shop"></i>
                                    <span class="mx-2">{habitacionesCaras}</span>
                                </h4>
                            </div>
                        </div> */}
                        <div class="card text-center bg-success text-white mb-3">
                            <div class="card-body">
                                <h3> Total Reservaciones </h3>
                                <h4> 
                                    <i class="fa-solid fa-shop"></i>
                                    <span class="mx-2">{totalReservaciones}</span>
                                </h4>
                            </div>
                        </div>
                        <div class="card text-center bg-secondary text-white mb-3">
                            <div class="card-body">
                                <h3> Reservaciones Eliminados </h3>
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

export default ListarReservacion;