import axios from "axios"
import {useEffect, useState} from "react"
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../Menu";

// const URL = 'http://localhost:8000/reservacion'
const URL = 'http://localhost:8000/api/reservacion';

const EditarReservacion = () => {

    const [habitacion,setHabitacion] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido,setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono,setTelefono] = useState('')
    const [pais,setPais] = useState('')
    const [ciudad,setCiudad] = useState('')
    const [direccion,setDireccion] = useState('')
    const [postal,setPostal] = useState('')
    const [precio,setPrecio] = useState('')
    const [horario,setHorario] = useState('')
    // const [estado,setEstado] = useState('DISPONIBLE')
    const navigate = useNavigate()
    const {idReservacion} = useParams()

    const update = async (e) => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('x-access-token');
            axios.defaults.headers.common['x-access-token'] = token;
            await axios.put(`${URL}/${idReservacion}`, {
                habitacion: habitacion,
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                telefono: telefono,
                pais: pais,
                ciudad: ciudad,
                direccion: direccion,
                postal: postal,
                precio: precio,
                horario: horario,
                // estado: estado
            });
            navigate('/reservaciones');
        } catch (error) {
            console.error('Error al actualizar la reservación:', error);
        }
    };

    useEffect(() => {
        getReservacionById()
    //eslint-disable-next-line
    },[])

    const getReservacionById = async () => {
        try {
            const token = localStorage.getItem('x-access-token');
            axios.defaults.headers.common['x-access-token'] = token;
            const res = await axios.get(`${URL}/${idReservacion}`);
            setHabitacion(res.data.habitacion);
            setNombre(res.data.nombre);
            setApellido(res.data.apellido);
            setCorreo(res.data.correo);
            setTelefono(res.data.telefono);
            setPais(res.data.pais);
            setCiudad(res.data.ciudad);
            setDireccion(res.data.direccion);
            setPostal(res.data.postal);
            setPrecio(res.data.precio);
            setHorario(res.data.horario);
            // setEstado(res.data.estado);
        } catch (error) {
            console.error('Error al obtener la reservación:', error);
        }
    };

    return (
        <div>
            <Menu/>
            <div class="container">
                <form class="row" onSubmit={update}>
                    <div class="col-7 mx-auto">
                        <div class="row">
                            <legend class="text-center header fs-2 mt-5">Editar Reservacion</legend>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-list-ol"></i>
                            </h3>
                            <div class="col-11 my-3">
                                <input value={habitacion} onChange={e => setHabitacion(e.target.value)} type="text" placeholder="Habitacion" class="form-control"/>
                            </div>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-arrow-up-9-1"></i>
                            </h3>
                            <div class="col-11 my-3">
                                <input value={nombre} onChange={e => setNombre(e.target.value)} type="text" placeholder="Nombre" class="form-control"/>
                            </div>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-hotel"></i>
                            </h3>
                            <div class="col-11 my-3">
                                <input value={apellido} onChange={e => setApellido(e.target.value)} type="text" placeholder="Apellido" class="form-control"/>
                            </div>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-circle-dollar-to-slot"></i>
                            </h3>
                            <div class="col-11 my-3">
                                <input value={correo} onChange={e => setCorreo(e.target.value)} type="email" placeholder="Correo" class="form-control"/>
                            </div>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-file-invoice-dollar"></i>
                            </h3>
                            <div class="col-11 my-3">
                                <input value={telefono} onChange={e => setTelefono(e.target.value)} type="number" placeholder="Telefono" class="form-control"/>
                            </div>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-business-time"></i>
                            </h3>
                            {/* Agregando codigo */}
                            <div class="col-11 my-3">
                                <input value={pais} onChange={e => setPais(e.target.value)} type="text" placeholder="Pais" class="form-control"/>
                            </div>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-hotel"></i>
                            </h3>
                            {/*  */}
                            <div class="col-11 my-3">
                                <input value={ciudad} onChange={e => setCiudad(e.target.value)} type="text" placeholder="Ciudad" class="form-control"/>
                            </div>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-hotel"></i>
                            </h3>    
                            {/*  */}
                            <div class="col-11 my-3">
                                <input value={direccion} onChange={e => setDireccion(e.target.value)} type="text" placeholder="Direccion" class="form-control"/>
                            </div>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-hotel"></i>
                            </h3>
                            {/*  */}
                            <div class="col-11 my-3">
                                <input value={postal} onChange={e => setPostal(e.target.value)} type="number" placeholder="Postal" class="form-control"/>
                            </div>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-hotel"></i>
                            </h3>
                            {/*  */}
                            <div class="col-11 my-3">
                                <input value={precio} onChange={e => setPrecio(e.target.value)} type="number" placeholder="Precio" class="form-control"/>
                            </div>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-hotel"></i>
                            </h3>
                            {/* Poniendole text por mientras,luego cambio a date */}
                            <div class="col-11 my-3">
                                <input value={horario} onChange={e => setHorario(e.target.value)} type="text" placeholder="Precio" class="form-control"/>
                            </div>
                            {/*  */}
                            {/* <div class="col-11 my-3">
                                <select class="form-select" value={estado} onChange={e => setEstado(e.target.value)}>
                                    <option value="DISPONIBLE">DISPONIBLE</option>
                                    <option value="OCUPADO">OCUPADO</option>
                                    <option value="RESERVADO">RESERVADO</option>
                                </select>
                            </div> */}
                            {/*  */}
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

export default EditarReservacion;