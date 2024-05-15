import React from 'react';
import Menu from '../Menu';
import "../css/nosotros.css";
import "../css/drparadox.css";
 
const Nosotros = () => {
    return (
        <div>
            <Menu/>
            <div className='portadaus row'>
            
            <img className='logous' src="img/cheraton_white012a.png" style={{ width: '350px', height: 'auto', marginRight: '800px' }}/>            </div>
 
            <div className="fondo-drparadox">
                <div className="drparadox">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/G74urj5Txno?autoplay=1&loop=1&playlist=G74urj5Txno&controls=0"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="YouTube video player"
                    ></iframe>
                </div>
            </div>
 
            <div className="container-lorehotel01">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 my-1 d-flex align-items-center justify-content-center">
                            <div className="text-center img-container">
                                <iframe
                                    title="container 2.1"
                                    className="c2.1"
                                    src="img/hotel.jpeg"
                                    width="600"
                                    height="400"
                                ></iframe>
                            </div>
                        </div>
 
                        <div className="col-lg-6 col-md-12 my-1 d-flex align-items-center justify-content-center">
                            <div className="text-center">
                                <h4 className="text-dark col-md-12 my-1 historia-title">Historia de "Cheraton"</h4>
                                <p className="text-dark historia-content">
                                    Cheraton empezó en 1937 cuando dos emprendedores, Ernest Henderson y Robert Moore, compraron el Hotel Stonehaven en Springfield, Massachusetts. Rápidamente expandieron su empresa, para incluir hoteles a lo largo de los Estados Unidos. Tal fue el crecimiento, que en 1945, se convirtió en la primera cadena hotelera que cotizaba en la Bolsa de Nueva York. Cheraton se expandió internacionalmente en 1949 con la compra de dos cadenas hoteleras canadienses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <div className="container-lorehotel02">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 my-1 d-flex align-items-center justify-content-center">
                            <div className="text-center">
                                <p className="col-lg-6 text-dark col-md-12 my-1 historia-content">En la década de 1960 se abrieron los primeros hoteles Cheraton en América Latina y en Oriente Medio. En 1965, Cheraton abrió su hotel número 100. El conglomerado internacional ITT compró la cadena en 1968, recibiendo el nombre de Compañía ITT Cheraton. Los capitales provienen de Italia, Canadá, Estados Unidos y Argentina.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 my-1 d-flex align-items-center justify-content-center">
                            <div className="text-center img-container">
                                <iframe
                                    title="container 2.1"
                                    className="c2.1"
                                    src="img/expansion.jpg"
                                    width="600"
                                    height="400"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <hr className='my-4'/>
 
            <div className="container">
                <div className="row">
                    <h1 className='valtit'>G O A L S</h1>
                    <div className="col-md-4 mb-4 pt-3">
                        <div className="card border-light h-100 ">
                            <img src="img/mision_c.svg" className="img-fluid mx-auto pt-2 pb-3" alt="..." width="250" style={{ height: '200px' }}/>
                            <div className="card-body bg-black">
                                <p className="card-text text-center text-white" style={{ fontFamily: 'Tahoma' }}>Satisfacer las necesidades de nuestros clientes basados en los valores de honestidad, servicilidad,
                                responsabilidad, solidaridad, amabilidad y puntualidad hacia todos ustedes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 pt-3">
                        <div className="card border-light h-100">
                            <img src="img/vision_c.svg" className="img-fluid mx-auto pt-3 pb-3" alt="..." width="250" style={{ height: '200px' }}/>
                            <div className="card-body bg-black">
                                <p className="card-text text-center text-white" style={{ fontFamily: 'Tahoma' }}>Ser una empresa altamente competitiva y reconocida, destacada por la excelente calidad de nuestros
                                servicios y posicionada en el mercado en los sectores Hotelería y Departamentos.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 pt-3">
                        <div className="card border-light h-100">
                            <img src="img/valores_c.svg" className="img-fluid mx-auto pt-3 pb-3" alt="..." width="250" style={{ height: '200px' }}/>
                            <div className="card-body bg-black">
                                <p className="card-text text-center text-white" style={{ fontFamily: 'Tahoma' }}>Mantener las mejores relaciones con nuestros cliente y proveedores ya que ellos van de la mano con
                                nuestro crecimiento exigiéndonos cumplimiento y calidad.</p>
                            </div>
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
 
export default Nosotros;