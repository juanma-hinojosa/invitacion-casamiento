import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import GiftCard from './GiftCard';

// Importar estilos base de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import './GiftCarousel.css'; // Nuestros estilos personalizados

const GiftCarousel = () => {
  // Array de productos iterables. Es fácil agregar o quitar elementos aquí.
  const products = [
    // --- Cocina ---
    { id: 1, title: 'Mesa/Sillas', category: 'Cocina', price: '$ 0.00', image: '/mesa-sillas.jpg' },
    { id: 2, title: 'Refrigerador', category: 'Cocina', price: '$ 0.00', image: '/refrigerador.jpg' },
    { id: 3, title: 'Estufa de piso a gas', category: 'Cocina', price: '$ 0.00', image: '/estufa.jpg' },
    { id: 4, title: 'Batidora', category: 'Cocina', price: '$ 0.00', image: '/batidora.jpg' },
    { id: 5, title: 'Mantel', category: 'Cocina', price: '$ 0.00', image: '/mantel.jpg' },
    { id: 6, title: 'Escurridor de platos', category: 'Cocina', price: '$ 0.00', image: '/escurridor.jpg' },
    { id: 7, title: 'Olla a presión', category: 'Cocina', price: '$ 0.00', image: '/olla-presion.jpg' },
    { id: 8, title: 'Servilletero', category: 'Cocina', price: '$ 0.00', image: '/servilletero.jpg' },
    { id: 9, title: 'Juego de tazas de té', category: 'Cocina', price: '$ 0.00', image: '/tazas-te.jpg' },
    { id: 10, title: 'Plato hondo', category: 'Cocina', price: '$ 0.00', image: '/plato-hondo.jpg' },
    { id: 11, title: 'Mielero', category: 'Cocina', price: '$ 0.00', image: '/mielero.jpg' },
    { id: 12, title: 'Especiero condimentos', category: 'Cocina', price: '$ 0.00', image: '/especiero.jpg' },
    { id: 13, title: 'Utensilios de madera', category: 'Cocina', price: '$ 0.00', image: '/utensilios.jpg' },
    { id: 14, title: 'Portarrollos de papel higiénico', category: 'Cocina', price: '$ 0.00', image: '/portarrollos.jpg' },

    // --- Baño ---
    { id: 15, title: 'Cesta', category: 'Baño', price: '$ 0.00', image: '/cesta.jpg' },
    { id: 16, title: 'Alfombras', category: 'Baño', price: '$ 0.00', image: '/alfombras-bano.jpg' },
    { id: 17, title: 'Espejo', category: 'Baño', price: '$ 0.00', image: '/espejo.jpg' },
    { id: 18, title: 'Soporte para bastoncillos y discos', category: 'Baño', price: '$ 0.00', image: '/soporte-bastoncillos.jpg' },
    { id: 19, title: 'Toallas de cara y de baño', category: 'Baño', price: '$ 0.00', image: '/toallas.jpg' },
    { id: 20, title: 'Papelera', category: 'Baño', price: '$ 0.00', image: '/papelera-bano.jpg' },
    { id: 21, title: 'Jabonera/Portacepillos de baño', category: 'Baño', price: '$ 0.00', image: '/jabonera.jpg' },
    { id: 22, title: 'Portacepillos de dientes', category: 'Baño', price: '$ 0.00', image: '/portacepillos.jpg' },

    // --- Dormitorio ---
    { id: 23, title: 'Cama', category: 'Dormitorio', price: '$ 0.00', image: '/cama.jpg' },
    { id: 24, title: 'Colchón', category: 'Dormitorio', price: '$ 0.00', image: '/colchon.jpg' },
    { id: 25, title: 'Juego de ropa de cama', category: 'Dormitorio', price: '$ 0.00', image: '/ropa-cama.jpg' },
    { id: 26, title: 'Lámpara', category: 'Dormitorio', price: '$ 0.00', image: '/lampara.jpg' },
    { id: 27, title: 'Ropa de armario', category: 'Dormitorio', price: '$ 0.00', image: '/ropa-armario.jpg' },

    // --- Sala de estar ---
    { id: 28, title: 'Sofá', category: 'Sala de estar', price: '$ 0.00', image: '/sofa.jpg' },
    { id: 29, title: 'Mueble para TV', category: 'Sala de estar', price: '$ 0.00', image: '/mueble-tv.jpg' },
    { id: 30, title: 'Mesa', category: 'Sala de estar', price: '$ 0.00', image: '/mesa-sala.jpg' },
    { id: 31, title: 'Cortina', category: 'Sala de estar', price: '$ 0.00', image: '/cortina.jpg' },
    { id: 32, title: 'Alfombra', category: 'Sala de estar', price: '$ 0.00', image: '/alfombra.jpg' },
    { id: 33, title: 'Percheros', category: 'Sala de estar', price: '$ 0.00', image: '/percheros.jpg' },

    // --- Limpieza ---
    { id: 34, title: 'Fregona', category: 'Limpieza', price: '$ 0.00', image: '/fregona.jpg' },
    { id: 35, title: 'Recogedor', category: 'Limpieza', price: '$ 0.00', image: '/recogedor.jpg' },
    { id: 36, title: 'Paño de limpieza', category: 'Limpieza', price: '$ 0.00', image: '/pano.jpg' }
  ];

  return (
    <div className="carousel-section">
      <h2 className="carousel-title">Lista de Regalos</h2>
      <div className="carousel-container">
        <Swiper
          modules={[Pagination]}
          // Configuración por defecto (Mobile First - Pantallas muy pequeñas)
          spaceBetween={15}
          slidesPerView={1.2} 
          centeredSlides={true}
          pagination={{ clickable: true }}
          // Breakpoints para adaptar a pantallas más grandes
          breakpoints={{
            // Celulares medianos/grandes (ej. iPhone Pro Max, Androids grandes)
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // Tablets
            600: {
              slidesPerView: 2.2,
              spaceBetween: 20,
              centeredSlides: false, // En tablet queda mejor alineado a la izquierda
            },
            // Desktop
            800: {
              slidesPerView: 3,
              spaceBetween: 25,
              centeredSlides: false,
            }
          }}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <GiftCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GiftCarousel;