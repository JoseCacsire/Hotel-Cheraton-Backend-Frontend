import React from 'react';
import Menu from '../Menu';
import "../css/inicio.css"
import "../css/footer.css"
 
const Inicio = () => {
    return (
        <div>
            <Menu/>
            <div class="container-fluid portada">
                <img src="img/slogan_cheraton01.png" style={{ width: '350px', height: 'auto', marginRight: '800px' }}/>
            </div>
            <div class="container text-center">
    <div>
        <h2 class="welcome text-center pb-1" style={{ fontSize: '0.9rem', fontFamily: 'Tahoma'}}>WELCOME TO HOTEL CHERATON</h2>
        <h2 class="text-center pading" style={{ fontFamily: 'Bookman Old Style', fontSize: '3rem' }}>Luxury Hotel & Convention Center in Lima</h2>
        <div class="cont text-center pb-5 pt-3" style={{ maxWidth: '1000px', margin: '0 auto', height: '160px'}}>
                    <p class="" style= {{ fontFamily: 'Trebuchet MS'}}>Con la mejor ubicación en el centro de la ciudad para viajes de negocios y
                        placer,
                        Delfines Hotel & Convention Center es uno de los principales hoteles de
                        conferencias 5 estrellas de Lima, Perú. Nuestra ubicación en el corazón del
                        exclusivo distrito financiero y residencial de San Isidro le brinda lo mejor de Lima. Quédese con
                        nosotros y se encontrará frente al Lima Golf Club y una gran variedad de atracciones turísticas,
                        tiendas, restaurantes, destinos para disfrutar la vida nocturna y ruinas históricas. Además, nuestro
                        hotel está cerca de la ubicación del centro financiero y ofrece una conveniencia inigualable para
                        las
                        principales corporaciones y oficinas gubernamentales.</p>
                </div>
        <br /><br />
    </div>
</div>
 
<div className="container-firstintroa">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 my-1 d-flex align-items-center justify-content-center">
                            <div className="text-center">
                                <p className="col-lg-8 text-light my-2 firstintroa-content">
                                <h4 className="text-light my-4 firstintroa-title">Nuestros Beneficios</h4>
                                    Saboree los galardonados cócteles y la cocina peruana en uno de los cuatro
                                     restaurantes sofisticados. Deléitese con un tratamiento en el Spa Murukas,
                                      descanse junto a nuestra piscina climatizada o revitalícese con una
                                       sesión de ejercicios en el gimnasio. Para reuniones en el lugar, bodas y
                                        eventos especiales Delfines Hotel & Convention Center cuenta con 14
                                         instalaciones para eventos de última tecnología, destacadas por la
                                          sala Mediterráneo con capacidad para 880 personas. Con más de 20 años
                                           de experiencia en hospedar los eventos más prestigiosos de Lima,
                                            aseguramos un evento corporativo o reunión social de firma.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 my-1 d-flex align-items-center justify-content-center">
                            <div className="text-center img-container">
                                <iframe
                                    title="container 2.1"
                                    className="c2.1"
                                    src="img/iniciohotel01.jpg"
                                    width="600"
                                    height="450"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <div class="container section2">
                <div>
                    <div class="edite-container">
                        <p class="h-cheraton text-center">¿A dónde quieres ir?</p>
                        <p class="text-center text-container">¡Planea tu próximo viaje y encuentra los mejores consejos e
                            inspiración
                            para viajar y hospedarse en una de nuestras sedes!</p>
                    </div>
                </div>
               
                <div class="row row-cols-1 row-cols-md-5 g-4 flex">
                    <div class="flex">
                        <div class="card h-100">
                            <div>
                                <img src="/img/inicio_t1.jpg" class="card-img-top" alt="Imagen de viaje a la playa" />
                            </div>
                            <div class="card-body text-center">
                                <p class="" style={{ fontWeight: 'bold', fontSize: '22px' }}>VIAJES A LA PLAYA</p>
                                <p class="card-text">Disfruta del verano en estas imperdibles vacaciones en el Caribe.</p>
                                </div>
                            </div>
                        </div>
 
                        <div class="flex">
                        <div class="card h-100">
                            <div>
                                <img src="/img/inicio_t2.jpg" class="card-img-top" alt="Imagen de viaje a la playa" />
                            </div>
                            <div class="card-body text-center">
                                <p class="" style={{ fontWeight: 'bold', fontSize: '22px' }}>TENDENCIAS</p>
                                <p class="card-text">Disfruta del verano en estas imperdibles vacaciones en el Caribe.</p>
                                </div>
                            </div>
                        </div>
 
                        <div class="flex">
                        <div class="card h-100">
                            <div>
                                <img src="/img/inicio_t3.jpg" class="card-img-top" alt="Imagen de viaje a la playa" />
                            </div>
                            <div class="card-body text-center">
                                <p class="" style={{ fontWeight: 'bold', fontSize: '22px' }}>AL AIRE LIBRE</p>
                                <p class="card-text">Las mejores actividades en la naturaleza para hacer con niños
                                    en
                                    las islas Caribe.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                        <div class="card h-100">
                            <div>
                                <img src="/img/inicio_t4.jpg" class="card-img-top" alt="Imagen de viaje a la playa" />
                            </div>
                            <div class="card-body text-center">
                                <p class="" style={{ fontWeight: 'bold', fontSize: '22px' }}>PAREJAS + FAMILIA</p>
                                <p class="card-text">Planea una escape romántico con tu pareja y vive una de las
                                    mejores experiencias.</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div>
                <div class="container2 ">
                    <p class="h-cheraton text-center">HOTEL CHERATON</p>
                    <p class="e-completamente text-center">Escápate Completamente</p>
                </div>
            </div>
 
            <div class="fondo-footer">
                <div class="footer container-fluid">
                    <footer style={{ alignContent: 'center', textAlign: 'center' }}>
                        <img class="mt-4" src="img/Cheraton_Full_Logo_Marfil.svg" alt="" width="200px"/>
                        <h4 class="mt-3">SÍGUENOS EN:</h4>
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-youtube"></i>
                    </footer>
                    <footer>
                        <h4>HORARIOS DE ATENCIÓN</h4>
                        <hr class="linea"/>
                        <br/>
                        <p>Lunes a Sábados - 8:00 am - 12:00am</p>
                        <p>Domingos- 8:00 am - 10:00am</p>
                    </footer>
                    <footer>
                    <h4 class="mt-3 pt-2">CONTÁCTANOS</h4>
                        <hr class="linea"/>
                        <br/>
                        <ul class="direcciones">
                            <li>Cheraton Convention Center
                            </li>
                            <li>Caserío Huaca de Piedra Illimo - Lambayeque</li>
                            <li>Celular: (51) 961 456 785</li>
                            <li>Correo: cheratonperu@gmail.com</li>
                        </ul>
                    </footer>
                    <footer>
   
</footer>
 
                </div>
            </div>
 
            <div class="footer-over">
        <p>2024 © Todos los Derechos Reservados a Diego Abad, Jose Luis Bautista y Jose Luis Cacsire.</p>
        <p>Propiedad de 'Cheraton Convention Center'</p>
    </div>
        </div>
    );
};
 
export default Inicio;