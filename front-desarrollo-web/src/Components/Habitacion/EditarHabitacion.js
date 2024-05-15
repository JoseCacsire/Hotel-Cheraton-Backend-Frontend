import axios from "axios"
import {useEffect, useState} from "react"
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../Menu";

// const URL = 'http://localhost:8000/habitacion'
const URL = 'http://localhost:8000/api/habitacion';

const EditarHabitacion = () => {

    const [numeroHabitacion,setNumeroHabitacion] = useState('')
    const [piso, setPiso] = useState('')
    const [descripcion,setDescripcion] = useState('')
    const [precio8Horas, setPrecio8Horas] = useState('')
    const [precioDia,setPrecioDia] = useState('')
    const [estado,setEstado] = useState('')
    const navigate = useNavigate()
    const {idHabitacion} = useParams()

    const update = async (e) => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('x-access-token');
            axios.defaults.headers.common['x-access-token'] = token;
            await axios.put(`${URL}/${idHabitacion}`, {
                numeroHabitacion: numeroHabitacion,
                piso: piso,
                descripcion: descripcion,
                precio8Horas: precio8Horas,
                precioDia: precioDia,
                estado: estado
            });
            navigate('/habitaciones');
        } catch (error) {
            console.error('Error al actualizar la habitación:', error);
        }
    };

    useEffect(() => {
        getHabitacionById()
    //eslint-disable-next-line
    },[])

    const getHabitacionById = async () => {
        try {
            const token = localStorage.getItem('x-access-token');
            axios.defaults.headers.common['x-access-token'] = token;
            const res = await axios.get(`${URL}/${idHabitacion}`);
            setNumeroHabitacion(res.data.numeroHabitacion);
            setPiso(res.data.piso);
            setDescripcion(res.data.descripcion);
            setPrecio8Horas(res.data.precio8Horas);
            setPrecioDia(res.data.precioDia);
            setEstado(res.data.estado);
        } catch (error) {
            console.error('Error al obtener la habitación:', error);
        }
    };

    return (
        <div>
            <Menu/>
            <div class="container">
                <form class="row" onSubmit={update}>
                    <div class="col-7 mx-auto">
                        <div class="row">
                            <legend class="text-center header fs-2 mt-5">Editar Habitacion</legend>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-list-ol"></i>
                            </h3>
                            <div class="col-11 my-3">
                                <input value={numeroHabitacion} onChange={e => setNumeroHabitacion(e.target.value)} type="number" placeholder="Numero" class="form-control"/>
                            </div>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-arrow-up-9-1"></i>
                            </h3>
                            <div class="col-11 my-3">
                                <input value={piso} onChange={e => setPiso(e.target.value)} type="number" placeholder="N° Piso" class="form-control"/>
                            </div>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-hotel"></i>
                            </h3>
                            <div class="col-11 my-3">
                                <input value={descripcion} onChange={e => setDescripcion(e.target.value)} type="text" placeholder="Descripcion" class="form-control"/>
                            </div>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-circle-dollar-to-slot"></i>
                            </h3>
                            <div class="col-11 my-3">
                                <input value={precio8Horas} onChange={e => setPrecio8Horas(e.target.value)} type="number" placeholder="S/. 8 Horas" class="form-control"/>
                            </div>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-file-invoice-dollar"></i>
                            </h3>
                            <div class="col-11 my-3">
                                <input value={precioDia} onChange={e => setPrecioDia(e.target.value)} type="number" placeholder="S/. 1 DIA" class="form-control"/>
                            </div>
                            <h3 class="col-1 text-center my-3">
                                <i class="fa-solid fa-business-time"></i>
                            </h3>
                            <div class="col-11 my-3">
                                <select class="form-select" value={estado} onChange={e => setEstado(e.target.value)}>
                                    <option value="DISPONIBLE">DISPONIBLE</option>
                                    <option value="OCUPADO">OCUPADO</option>
                                    <option value="RESERVADO">RESERVADO</option>
                                </select>
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

export default EditarHabitacion;