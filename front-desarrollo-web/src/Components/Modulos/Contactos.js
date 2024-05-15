import React from 'react';
import Menu from '../Menu';
const Contactos = () => {
    return (
        <div>
            <Menu/>
            <section class="py-4 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-8 col-md-6 d-flex align-items-center">
                        <div>
                            <h1 class="fw-light">Ubícanos en Google Maps</h1>
                            <p class="lead text-muted">Usted encontrará lo mejor de Lima en Cheraton Hotel & Convention Center,
                                miembros de Preferred Hotels & Resorts. Visite nuestra sede principa ubicada en Caserío Huaca de Piedra,
                                Illimo - Lambayeque, Lambayeque, Illimo, Peru.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
                        <img src='img/global.png' alt='img' height="200"/>
                    </div>
                </div>
                <hr/>
            </section>
 
            <div className="container-fluid pb-4 pt-4" style={{ backgroundColor: '#1c1c1c' }}>
    <div className="row">
        <div className="col-lg-6 col-md-12 my-1 d-flex align-items-center justify-content-center">
            <div className="py-3 text-center">
                <p className="text-white col-md-12 my-1 d-flex" style={{ fontSize: '0.8rem' }}>Nuestra ubicación</p>
                <h4 className="text-white col-md-12 my-1 d-flex" style={{ fontSize: '1.9rem', fontFamily: 'Bookman Old Style' }}>CÓMO LLEGAR</h4>
                <p className="text-white col-md-12 my-1 d-flex">Cheraton Convention Center</p>
                <p className="text-white">Caserío Huaca de Piedra Illimo - Lambayeque</p>
                <p className="text-white col-md-12 my-1 d-flex">Tel.: <u className="text-white"><strong>+51 926 951 731</strong></u></p>
            </div>
        </div>
        <div className="col-lg-6 col-md-12 my-1 d-flex align-items-center justify-content-center" style={{ maxWidth: '550px' }}>
            <div className="col-lg-12 my-1 p-0 d-flex justify-content-center align-items-center" style={{ width: '100%', height: '450px', overflow: 'hidden' }}>
                <iframe
                    title="mapa"
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.0801372446145!2d-77.05120388459285!3d-12.111363745222243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c764a29b1e5f%3A0x7ba7e00c544ebe94!2sLima%20Golf%20Club!5e0!3m2!1sen!2s!4v1647699432389!5m2!1sen!2s"
                    width="550"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    iwloc="near"
                    style={{ border: 0 }}
                ></iframe>
            </div>
        </div>
    </div>
</div>
<div class="footer-over">
        <p>2024 © Todos los Derechos Reservados a Diego Abad, Jose Luis Bautista y Jose Luis Cacsire.</p>
        <p>Propiedad de 'Cheraton Convention Center'</p>
    </div>
 
            <script>
                AOS.init();
            </script>
        </div>
    );
};
export default Contactos;