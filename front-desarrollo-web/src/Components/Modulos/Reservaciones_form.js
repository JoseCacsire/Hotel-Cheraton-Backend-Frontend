import axios from "axios"
import { useState, useEffect } from "react"
import { useLocation, useNavigate} from "react-router-dom";
import Menu from "../Menu";

const URL = 'http://localhost:8000/api/reservacion'

const ReservacionesForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [habitacion, setHabitacion] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [pais, setPais] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [direccion, setDireccion] = useState('')
    const [postal, setPostal] = useState('')
    const [precio, setPrecio] = useState('')
    const [horario, setHorario] = useState('')
    const [error, setError] = useState('');
    // const [estado,setEstado] = useState('DISPONIBLE')
    // const navigate = useNavigate()

    useEffect(() => {
        const habitacionId = new URLSearchParams(location.search).get("id");
        if (habitacionId) {
            if (habitacionId === 'junior-suite') {
                setHabitacion('JUNIOR SUITE');
                setPrecio(200);
                setHorario('8:00PM - 11:00PM');
            } else if (habitacionId === 'olimpo-suite') {
                setHabitacion('OLIMPO SUITE');
                setPrecio(400);
                setHorario('7:00PM - 3:00PM');
            } else if (habitacionId === 'family-suite') {
                setHabitacion('FAMILY SUITE');
                setPrecio(500);
                setHorario('7:00PM - 5:00PM');
            }
        }
    }, [location.search]);

    const store = async (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !correo || !telefono || !pais || !ciudad || !direccion || !postal || !precio || !horario) {
            setError('Por favor complete todos los campos.');
            return;
        }

        const correoValido = /\S+@\S+\.\S+/;
        if (!correoValido.test(correo)) {
            setError('Por favor ingrese una dirección de correo electrónico válida.');
            return;
        }

        const telefonoValido = /^\d{1,9}$/;
        if (!telefonoValido.test(telefono)) {
            setError('Por favor ingrese un número de teléfono válido (máximo 9 dígitos).');
            return;
        }

        const postalValido = /^\d{1,7}$/;
        if (!postalValido.test(postal)) {
            setError('Por favor ingrese un código postal válido (máximo 7 dígitos).');
            return;
        }
        try{
            await axios.post(URL, {
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
                horario: horario
            });
            alert('¡Booking realizado con éxito!');
            navigate('/reservacionespage');
        } catch (error) {
            alert('Error al realizar la reserva:', error);
        }
    };
    
    return (
        <div>
            <Menu />
            <div class="container">
                <form class="row" onSubmit={store}>
                    <div class="col-7 mx-auto pb-4">
                        <div class="row">
                            <legend class="text-center header fs-2 mt-5 pb-4" style={{ fontWeight: 'bold', fontSize: '24px' }}>Datos del huésped</legend>
                            {error && <p className="text-danger">{error}</p>}
                            <div className="col-11 my-3">
                                <p>Habitación:</p>
                                <strong>{habitacion}</strong>
                            </div>
                            <div class="col-11 my-3">
                                <p>Nombre:</p> 
                                <input value={nombre} onChange={e => setNombre(e.target.value)} type="text" className="form-control" required/>
                            </div>
                            <div class="col-11 my-3">
                                <p>Apellidos:</p> 
                                <input value={apellido} onChange={e => setApellido(e.target.value)} type="text" className="form-control" required/>
                            </div>
                            <div class="col-11 my-3">
                                <p>Dirección de correo electrónico:</p> 
                                <input value={correo} onChange={e => setCorreo(e.target.value)} type="email"className="form-control" required />
                            </div>
                            <div class="col-11 my-3">
                                <p>Teléfono:</p> 
                                <input value={telefono} onChange={e => setTelefono(e.target.value)} type="text" className="form-control" pattern="\d{9}" maxLength="9" required />
                                <small className="text-muted">Por favor ingrese un número de teléfono válido (9 dígitos).</small>
                            </div>
                            <div class="col-11 my-3">
                                <p>País/Región:</p> 
                                <select className="form-select" value={pais} onChange={e => setPais(e.target.value)} required>
                                    <option value="">-- Seleccionar país/región --</option>
                                    <option value="Peru">Perú</option>
                                    <option value="Chile">Chile</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="China">China</option>
                                </select>
                            </div>
                            <div class="col-11 my-3">
                                <p>Ciudad:</p> 
                                <input value={ciudad} onChange={e => setCiudad(e.target.value)} type="text" className="form-control" required />
                            </div>
                            <div class="col-11 my-3">
                                <p>Dirección:</p> 
                                <input value={direccion} onChange={e => setDireccion(e.target.value)} type="text" className="form-control" required />
                            </div>
                            <div class="col-11 my-3">
                                <p>Postal:</p> 
                                <input value={postal} onChange={e => setPostal(e.target.value)} type="number" className="form-control" pattern="\d{1,7}" maxLength="7" required />
                                <small className="text-muted">Por favor ingrese un código postal válido (máximo 7 dígitos).</small>
                            </div>
                            <div class="col-11 my-3">
                                <p>Precio:</p> 
                                <input value={precio} onChange={e => setPrecio(e.target.value)} type="text" class="form-control" disabled />
                            </div>
                            <div class="col-11 my-3">
                                <p>Horario:</p> 
                                <input value={horario} onChange={e => setHorario(e.target.value)} type="text"  class="form-control" disabled />
                            </div>
                            <div class="col-md-12 text-center my-3">
                                <button type="submit" class="btn text-white bg-black btn-lg col-md-4">Reservar</button>
                            </div>
                        </div>
                    </div>
                    
                    <footer className="container">
                <p className="float-end"><a href="#reservaciones">Subir</a></p>
                &copy; Pagina creada bajo los derechos de Rodrigo 2022 &copy; Hotel Cheraton, contáctenos para mas información. <a href="#reservaciones">Privacy</a>
            </footer>
                </form>

            </div>
        </div>
        
    );
};

export default ReservacionesForm;
