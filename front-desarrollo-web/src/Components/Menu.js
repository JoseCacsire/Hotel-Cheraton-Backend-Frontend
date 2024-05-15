import React from 'react';

const Menu = () => {
    // Verifica si el token está presente en el almacenamiento local
  const token = localStorage.getItem('x-access-token');
 
  const handleLogout = () => {
    // Elimina el token del almacenamiento local
    localStorage.removeItem('x-access-token');
    // Redirige al usuario a la página de inicio o a donde desees
    window.location.href = 'http://localhost:3000/';
  };
  return (
    <div>
      <nav class="navbar sticky-top navbar-dark navbar-expand-lg bg-dark">
		  	<div class="container">
                 <a class="navbar-brand fs-2" href="http://localhost:3000/inicio">
                 <img src="img/cheraton_white0.png" alt="main_logo" style={{ width: '150px', height: 'auto' }} />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/inicio">Inicio</a>
                    </li>
                    {token && (
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="##" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Mantenimiento </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="http://localhost:3000/usuarios" >Usuarios</a></li>
                          <li><a class="dropdown-item" href="http://localhost:3000/habitaciones" >Habitaciones</a></li>
                          <li><a class="dropdown-item" href="http://localhost:3000/reservaciones" >Reservaciones</a></li>
                          <li><a class="dropdown-item" href="http://localhost:3000/agregarimagenes" >AgregarImagenes</a></li>
                        </ul>
                    </li>
                    )}
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/galeria">Galeria</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/reservacionespage">Reservaciones</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/nosotros">Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/contactos">Contacto</a>
                    </li>
                </ul>
                {!token && (
                  <div>
                      <i className="fa-sharp fa-solid fa-right-from-bracket text-white"></i>
                      <a className="text-white text-decoration-none ms-2" href="http://localhost:3000/login">Login</a>
                  </div>
                )}
                {token && (
                  <div>
                      <i className="fa-sharp fa-solid fa-right-from-bracket text-white"></i>
                    <button className="btn btn-link text-white text-decoration-none ms-2" onClick={handleLogout}>Cerrar Sesión</button>
                  </div>
                )}   
                {/* <div>
                    <i class="fa-sharp fa-solid fa-right-from-bracket text-white"></i>
                    <a class="text-white text-decoration-none ms-2" href="http://localhost:3000">Cerrar Sesion</a>
                </div> */}
            </div>
	      </div>
		  </nav>
    </div>
  )
}

export default Menu;
