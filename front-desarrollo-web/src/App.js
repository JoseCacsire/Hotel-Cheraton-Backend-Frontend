// Para arancar el front npm start
import { Route, Routes } from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Inicio from './Components/Modulos/Inicio';
import Login from './Components/Modulos/Login';
import Galeria from './Components/Modulos/Galeria';
import Contactos from './Components/Modulos/Contactos';
import Nosotros from './Components/Modulos/Nosotros';
import Reservaciones from './Components/Modulos/ReservacionesPage.js';
import ReservacionesForm from './Components/Modulos/Reservaciones_form';
// Agregar imagenes
import AgregarImagenes from './Components/Modulos/AgregarImagenes.js';
// Recuperar contraseña
import RecuperarContraseña from './Components/Modulos/RecuperarContraseña.js';
import ListarUsuario from './Components/Usuario/ListarUsuario';
import CrearUsuario from './Components/Usuario/CrearUsuario';
import EditarUsuario from './Components/Usuario/EditarUsuario';
import ListarHabitacion from './Components/Habitacion/ListarHabitacion';
import EditarHabitacion from './Components/Habitacion/EditarHabitacion';
import CrearHabitacion from './Components/Habitacion/CrearHabitacion';
import ListarReservacion from './Components/Reservacion/ListarReservacion';
import EditarReservacion from './Components/Reservacion/EditarReservacion';
import CrearReservacion from './Components/Reservacion/CrearReservacion';

function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<Login/>}></Route> */}
      {/* <Route path='/inicio' element={<Inicio/>}></Route>
      <Route path='/galeria' element={<Galeria/>}></Route>
      <Route path='/contactos' element={<Contactos/>}></Route>
      <Route path='/nosotros' element={<Nosotros/>}></Route> */}
      <Route path='/' element={<Inicio />}></Route>
      <Route path='/inicio' element={<Inicio />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/galeria' element={<Galeria />}></Route>
      <Route path='/contactos' element={<Contactos />}></Route>
      <Route path='/nosotros' element={<Nosotros />}></Route>
      <Route path='/reservacionespage' element={<Reservaciones />}></Route>
      {/* Agregar imagenes */}
      <Route path='/agregarimagenes' element={<AgregarImagenes />}></Route>
      {/* Recuperar contraaseña */}
      <Route path='/recuperarcontraseNa' element={<RecuperarContraseña />}></Route>
      <Route path='/reservaciones_form' element={<ReservacionesForm />}></Route>
      <Route path='/usuarios' element={<ListarUsuario />}></Route>
      <Route path='/usuarios/create' element={<CrearUsuario />}></Route>
      <Route path='/usuarios/update/:idUsuario' element={<EditarUsuario />}></Route>
      <Route path='/habitaciones' element={<ListarHabitacion />}></Route>
      <Route path='/habitaciones/create' element={<CrearHabitacion />}></Route>
      <Route path='/habitaciones/update/:idHabitacion' element={<EditarHabitacion />}></Route>
      <Route path='/reservaciones' element={<ListarReservacion />}></Route>
      <Route path='/reservaciones/create' element={<CrearReservacion />}></Route>
      <Route path='/reservaciones/update/:idReservacion' element={<EditarReservacion />}></Route>
    </Routes>
  );
}

export default App;
