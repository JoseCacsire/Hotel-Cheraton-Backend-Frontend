import React, { useState, useEffect } from 'react';
import Menu from '../Menu';
import "../css/galeria.css";
 
const Galeria = () => {
    const [fullscreenImage, setFullscreenImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
 
    const images = [
        { src: "img/loung_hor.jpg", alt: "Image 1" },
        { src: "img/habitat/family_0.jpg", alt: "Image 2" },
        { src: "img/habitat/family_1.jpg", alt: "Image 3" },
        { src: "img/habitat/family_2.jpg", alt: "Image 4" },
        { src: "img/habitat/junior_0.jpg", alt: "Image 5" },
        { src: "img/habitat/junior_0a.jpg", alt: "Image 6" },
        { src: "img/habitat/junior_0b.jpg", alt: "Image 7" },
        { src: "img/habitat/junior_1.jpg", alt: "Image 8" },
        { src: "img/habitat/junior_3.jpg", alt: "Image 9" },
        { src: "img/habitat/olimpo_0.jpg", alt: "Image 10" },
        { src: "img/habitat/olimpo_1.jpg", alt: "Image 11" },
        { src: "img/habitat/olimpo_2.jpg", alt: "Image 12" },
        { src: "img/habitat/olimpo_3.jpg", alt: "Image 13" },
        { src: "img/expansion.jpg", alt: "Image 14" },
        { src: "img/cheraton1.jpg", alt: "Image 15" },
        { src: "img/iniciohotel01.jpg", alt: "Image 16" },
    ];
 
    const openFullscreenImage = (index) => {
        setFullscreenImage(images[index].src);
        setCurrentIndex(index);
    };
 
    const closeFullscreenImage = () => {
        setFullscreenImage(null);
    };
 
    const handleKeyDown = (e) => {
        if (fullscreenImage) {
            if (e.key === 'Escape') {
                closeFullscreenImage();
            } else if (e.key === 'ArrowLeft') {
                navigate('left');
            } else if (e.key === 'ArrowRight') {
                navigate('right');
            }
        }
    };
 
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
 
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [fullscreenImage, currentIndex]);
 
    const navigate = (direction) => {
        let newIndex;
        if (direction === 'left') {
            newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        } else if (direction === 'right') {
            newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        }
        setFullscreenImage(images[newIndex].src);
        setCurrentIndex(newIndex);
    };
 
    return (
        <div>
            <Menu />
            <main>
                <section className=" text-center container">
                <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Galeria de Album</h1>
                            <p className="lead text-muted">Descubra lo mejor de Caserío Huaca de
                            Piedra Illimo - Lambayeque en el Cheraton Hotel & Convention Center, miembro de Preferred
                            Hotels & Resorts. Explore nuestra galería de fotos para descubrir por qué nuestro hotel
                            es una elección destacada en la región.
                            </p>
                        </div>
                    </div>
                </section>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {images.map((image, index) => (
                                <div className="col" key={index}>
                                    <div className="card shadow-sm" onClick={() => openFullscreenImage(index)}>
                                        <img src={image.src} alt={image.alt} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
 
            <div class="footer-over">
        <p>2024 © Todos los Derechos Reservados a Diego Abad, Jose Luis Bautista y Jose Luis Cacsire.</p>
        <p>Propiedad de 'Cheraton Convention Center'</p>
    </div>
 
            {/* Full Screen Image Modal */}
            {fullscreenImage && (
                <div className="fullscreen-modal" onClick={closeFullscreenImage}>
                    <span className="close-button" onClick={closeFullscreenImage}>X</span>
                    <img src={fullscreenImage} alt="Fullscreen" />
                </div>
            )}
 
            <script>
                AOS.init();
            </script>
        </div>
    );
};
 
export default Galeria;