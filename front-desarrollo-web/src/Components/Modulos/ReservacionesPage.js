import React, { useState } from 'react';
import Menu from '../Menu';
 
const ReservacionesPage = () => {
    const [showDetailsJunior, setShowDetailsJunior] = useState(false);
    const [showDetailsOlimpo, setShowDetailsOlimpo] = useState(false);
    const [showDetailsFamily, setShowDetailsFamily] = useState(false);
 
    const [currentImageJunior, setCurrentImageJunior] = useState(0);
    const [currentImageOlimpo, setCurrentImageOlimpo] = useState(0);
    const [currentImageFamily, setCurrentImageFamily] = useState(0);
   
    const imagesJunior = [
        "img/habitat/junior_0.jpg",
        "img/habitat/junior_0a.jpg",
        "img/habitat/junior_0b.jpg",
        "img/habitat/junior_1.jpg",
        "img/habitat/junior_3.jpg",
    ];
 
    const imagesOlimpo = [
        "img/habitat/olimpo_0.jpg",
        "img/habitat/olimpo_1.jpg",
        "img/habitat/olimpo_2.jpg",
        "img/habitat/olimpo_3.jpg",
    ];
 
    const imagesFamily = [
        "img/habitat/family_0.jpg",
        "img/habitat/family_1.jpg",
        "img/habitat/family_2.jpg",
    ];
 
    const handlePrevImage = (room) => {
        switch(room) {
            case 'junior':
                setCurrentImageJunior(prev => (prev === 0 ? imagesJunior.length - 1 : prev - 1));
                break;
            case 'olimpo':
                setCurrentImageOlimpo(prev => (prev === 0 ? imagesOlimpo.length - 1 : prev - 1));
                break;
            case 'family':
                setCurrentImageFamily(prev => (prev === 0 ? imagesFamily.length - 1 : prev - 1));
                break;
            default:
                break;
        }
    };
 
    const handleNextImage = (room) => {
        switch(room) {
            case 'junior':
                setCurrentImageJunior(prev => (prev === imagesJunior.length - 1 ? 0 : prev + 1));
                break;
            case 'olimpo':
                setCurrentImageOlimpo(prev => (prev === imagesOlimpo.length - 1 ? 0 : prev + 1));
                break;
            case 'family':
                setCurrentImageFamily(prev => (prev === imagesFamily.length - 1 ? 0 : prev + 1));
                break;
            default:
                break;
        }
    };
 
    const handleReservarClick = (habitacionId) => {
        window.open(`/reservaciones_form?id=${habitacionId}`, '_self');
    };
 
    const handleShowDetailsJuniorClick = () => {
        setShowDetailsJunior(true);
        setShowDetailsOlimpo(false);
        setShowDetailsFamily(false);
    };
 
    const handleShowDetailsOlimpoClick = () => {
        setShowDetailsJunior(false);
        setShowDetailsOlimpo(true);
        setShowDetailsFamily(false);
    };
 
    const handleShowDetailsFamilyClick = () => {
        setShowDetailsJunior(false);
        setShowDetailsOlimpo(false);
        setShowDetailsFamily(true);
    };
 
    const handleCloseClick = () => {
        setShowDetailsJunior(false);
        setShowDetailsOlimpo(false);
        setShowDetailsFamily(false);
    };
 
    return (
        <div>
            <Menu />
            <header>
                <div className="collapse bg-dark" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <p className="text-muted">Lujosas y sumamente cómodas habitaciones y suites en Cheraton Hotel &
                                    Convention Center se encuentran entre las habitaciones de hotel más grandes de Lima, Perú.
                                </p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4 className="text-white">Su boleto a las suites y habitaciones más lujosas de Lima.</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container">
                        <a href="http://localhost:3000/reservaciones" className="navbar-brand d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
                                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="me-2"
                                viewBox="0 0 24 24">
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                <circle cx="12" cy="13" r="4" />
                            </svg>
                            <strong>Habitaciones Y Suites Lujosas</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
                            aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </header>
 
            <div className="container marketing mb-4" id="junior-suite">
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1 mt-2 mb-4">Junior Suite</h2>
                        <p className="lead">Nuestras Junior Suites están ubicadas estratégicamente para ofrecerle una vista
                            espectacular de una de las áreas verdes más grandes de la ciudad, el Lima Golf Club.</p>
                        <div className="d-flex justify-content-center">  
                            <button className="btn mb-2 btn-agregar" style={{ color: '#b84c16', fontWeight: 600 }} onClick={handleShowDetailsJuniorClick}>DETALLES DE LA HABITACIÓN</button>
                        </div>
            {showDetailsJunior && (
                <div id="overlay" className="overlay bg-light">
                    <div className="details-box">
                    <button className="close-btn pt-2" style={{ background: 'none', border: 'none', fontFamily: 'Tahoma', color: 'black', fontWeight: 'bold', float: 'right' }} onClick={handleCloseClick}>X</button>
 
                        <p className="lead pt-4">Las habitaciones están equipadas con:</p>
                        <ul>
                            <li>Cama King size</li>
                            <li>Sala de estar</li>
                            <li>Balcón al aire libre</li>
                            <li>Internet WiFi</li>
                            <li>Smart TV curvo de 49" con señal digital</li>
                            <li>Dos líneas telefónicas con buzón de voz</li>
                            <li>Despertador</li>
                            <li>Caja de seguridad</li>
                            <li>Cafetera</li>
                            <li>Plancha y tabla de planchar</li>
                            <li>Minibar</li>
                        </ul>
                        <p><strong>Precio: </strong>$200 por noche</p>
                        <p className='pb-2'><strong>Horario: </strong>8:00PM - 11:00PM</p>
                    </div>
                </div>
            )}  
                    </div>
                    <div className="col-md-5 position-relative">
                       
                        <img src={imagesJunior[currentImageJunior]} className="img-fluid rounded-lg" alt='img' style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
                       
                        <div className="d-flex justify-content-between position-relative start-0 bottom-0 w-100 p-4">
                            <button className="btn me-4" style={{ fontSize: '1.3rem', padding: '0.5rem 1rem' }} onClick={() =>  handlePrevImage('junior')}>◄</button>
                            <button className="btn" style={{ fontSize: '1.3rem', padding: '0.5rem 1rem' }} onClick={() =>  handleNextImage('junior')}>►</button>
                            <button className="btn text-light bg-black mb-2 btn-agregar col-md-4" style={{ fontSize: '1.2rem'}} onClick={() => handleReservarClick('junior-suite')}>Reservar</button>
                        </div>      
                    </div>
                </div>
            </div>
 
            <div className="container marketing mb-5" id="suite-olimpo">
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1 mt-2 mb-4">Suite Olimpo</h2>
                        <p className="lead">Cuenta con una sala de estar, comedor, kitchenette, baño para visitas, un encantador
                            dormitorio con cama King y un amplio y lujoso baño principal de mármol blanco que incluye sauna y jacuzzi.</p>
                            <div className="d-flex justify-content-center">  
                            <button className="btn mb-2 btn-agregar" style={{ color: '#b84c16', fontWeight: 600 }} onClick={handleShowDetailsOlimpoClick}>DETALLES DE LA HABITACIÓN</button>
                        </div>
 
                        {showDetailsOlimpo && (
                <div id="overlay" className="overlay bg-light">
                    <div className="details-box">
                    <button className="close-btn pt-2" style={{ background: 'none', border: 'none', fontFamily: 'Tahoma', color: 'black', fontWeight: 'bold', float: 'right' }} onClick={handleCloseClick}>X</button>
 
                        <p className="lead pt-4">La Suite Olimpo está equipada con:</p>
                        <ul>
                            <li>Conexión inalámbrica a Internet</li>
                            <li>Smart TV curvo de 65" con señal digital</li>
                            <li>Vestidor</li>
                            <li>Dos líneas telefónicas con buzón de voz</li>
                            <li>Despertador</li>
                            <li>Caja de seguridad</li>
                            <li>Plancha y tabla de planchar</li>
                            <li>Mini bar</li>
                            </ul>
                        <p><strong>Precio: </strong>$400 por noche</p>
                        <p className='pb-2'><strong>Horario: </strong>7:00PM - 3:00PM</p>
                    </div>
                </div>
            )}  
                    </div>
                    <div className="col-md-5 position-relative">
                       
                        <img src={imagesOlimpo[currentImageOlimpo]} className="img-fluid rounded-lg" alt='img' style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
                       
                        <div className="d-flex justify-content-between position-relative start-0 bottom-0 w-100 p-4">
                            <button className="btn me-4" style={{ fontSize: '1.3rem', padding: '0.5rem 1rem' }} onClick={() =>  handlePrevImage('olimpo')}>◄</button>
                            <button className="btn" style={{ fontSize: '1.3rem', padding: '0.5rem 1rem' }} onClick={() =>  handleNextImage('olimpo')}>►</button>
                            <button className="btn text-light bg-black mb-2 btn-agregar col-md-4" style={{ fontSize: '1.2rem'}} onClick={() => handleReservarClick ('olimpo-suite')}>Reservar</button>
 
                        </div>      
                    </div>
                </div>
            </div>
 
            <div className="container marketing mb-5" id="family-suite">
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1 mt-2 mb-4">Family Suite</h2>
                        <p className="lead">Nuestras Family Suites están ubicadas estratégicamente para ofrecerle una vista
                            espectacular de una de las áreas verdes más grandes de la ciudad, el Lima Golf Club.</p>
                            <div className="d-flex justify-content-center">  
                            <button className="btn mb-2 btn-agregar" style={{ color: '#b84c16', fontWeight: 600 }} onClick={handleShowDetailsFamilyClick}>DETALLES DE LA HABITACIÓN</button>
                        </div>
 
                        {showDetailsFamily && (
                <div id="overlay" className="overlay bg-light">
                    <div className="details-box">
                    <button className="close-btn pt-2" style={{ background: 'none', border: 'none', fontFamily: 'Tahoma', color: 'black', fontWeight: 'bold', float: 'right' }} onClick={handleCloseClick}>X</button>
 
                        <p className="lead pt-4">Las habitaciones están equipadas con:</p>
                        <ul>
                            <li>Cama King size</li>
                            <li>Sala de estar</li>
                            <li>Balcón al aire libre</li>
                            <li>Internet WiFi</li>
                            <li>Smart TV curvo de 49" con señal digital</li>
                            <li>Dos líneas telefónicas con buzón de voz</li>
                            <li>Despertador</li>
                            <li>Caja de seguridad</li>
                            <li>Cafetera</li>
                            <li>Plancha y tabla de planchar</li>
                            <li>Minibar</li>
                            </ul>
                        <p><strong>Precio: </strong>$500 por noche</p>
                        <p className='pb-2'><strong>Horario: </strong>7:00PM - 5:00PM</p>
                    </div>
                </div>
            )}  
                    </div>
                    <div className="col-md-5 position-relative">
                       
                        <img src={imagesFamily[currentImageFamily]} className="img-fluid rounded-lg" alt='img' style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
                       
                        <div className="d-flex justify-content-between position-relative start-0 bottom-0 w-100 p-4">
                            <button className="btn me-4" style={{ fontSize: '1.3rem', padding: '0.5rem 1rem' }} onClick={() =>  handlePrevImage('olimpo')}>◄</button>
                            <button className="btn" style={{ fontSize: '1.3rem', padding: '0.5rem 1rem' }} onClick={() =>  handleNextImage('olimpo')}>►</button>
                            <button className="btn text-light bg-black mb-2 btn-agregar col-md-4" style={{ fontSize: '1.2rem'}} onClick={() => handleReservarClick ('family-suite')}>Reservar</button>
 
                        </div>        
                    </div>
                </div>
            </div>
            <div class="footer-over">
        <p>2024 © Todos los Derechos Reservados a Diego Abad, Jose Luis Bautista y Jose Luis Cacsire.</p>
        <p>Propiedad de 'Cheraton Convention Center'</p>
    </div>
        </div>
    );
};
 
export default ReservacionesPage;