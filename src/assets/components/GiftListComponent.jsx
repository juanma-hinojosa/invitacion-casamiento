import Flor from "../../../public/flor.png"
import Logo from "../../../public/logo.png"

function GiftListComponent() {
  const products = [
    // --- Cocina ---
    { id: 1, title: 'Mesa/Sillas', category: 'Cocina', price: '$ 0.00', image: '/mesa-sillas.jpg' },
    { id: 2, title: 'Heladera', category: 'Cocina', price: '$ 0.00', image: '/refrigerador.jpg' },
    // { id: 3, title: 'Cocina', category: 'Cocina', price: '$ 0.00', image: '/estufa.jpg' },
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
    { id: 14, title: 'Portarrollos de papel', category: 'Cocina', price: '$ 0.00', image: '/portarrollos.jpg' },

    // --- Baño ---
    { id: 15, title: 'Cesto de ropa de paja', category: 'Baño', price: '$ 0.00', image: '/cesta.jpg' },
    { id: 16, title: 'Alfombras', category: 'Baño', price: '$ 0.00', image: '/alfombras-bano.jpg' },
    // { id: 17, title: 'Espejo', category: 'Baño', price: '$ 0.00', image: '/espejo.jpg' },
    // { id: 18, title: 'Soporte para bastoncillos y discos', category: 'Baño', price: '$ 0.00', image: '/soporte-bastoncillos.jpg' },
    { id: 19, title: 'Toallas y Toallones', category: 'Baño', price: '$ 0.00', image: '/toallas.jpg' },
    // { id: 20, title: 'Tacho', category: 'Baño', price: '$ 0.00', image: '/papelera-bano.jpg' },
    { id: 21, title: 'Set de Baño', category: 'Baño', price: '$ 0.00', image: '/jabonera.jpg' },
    // { id: 22, title: 'Portacepillos de dientes', category: 'Baño', price: '$ 0.00', image: '/portacepillos.jpg' },

    // --- Dormitorio ---
    { id: 23, title: 'Cama', category: 'Dormitorio', price: '$ 0.00', image: '/cama.jpg' },
    { id: 24, title: 'Colchón', category: 'Dormitorio', price: '$ 0.00', image: '/colchon.jpg' },
    { id: 25, title: 'Juego de ropa de cama', category: 'Dormitorio', price: '$ 0.00', image: '/ropa-cama.jpg' },
    // { id: 26, title: 'Lámpara', category: 'Dormitorio', price: '$ 0.00', image: '/lampara.jpg' },
    { id: 27, title: 'Ropero', category: 'Dormitorio', price: '$ 0.00', image: '/ropa-armario.jpg' },

    // --- Sala de estar ---
    { id: 28, title: 'Sofá', category: 'Sala de estar', price: '$ 0.00', image: '/sofa.jpg' },
    { id: 29, title: 'Mueble para TV', category: 'Sala de estar', price: '$ 0.00', image: '/mueble-tv.jpg' },
    { id: 30, title: 'Mesa', category: 'Sala de estar', price: '$ 0.00', image: '/mesa-sala.jpg' },
    { id: 31, title: 'Cortina', category: 'Sala de estar', price: '$ 0.00', image: '/cortina.jpg' },
    { id: 32, title: 'Alfombra', category: 'Sala de estar', price: '$ 0.00', image: '/alfombra.jpg' },
    { id: 33, title: 'Percheros', category: 'Sala de estar', price: '$ 0.00', image: '/percheros.jpg' },

    // --- Limpieza ---
    { id: 34, title: 'Balde con escurridor', category: 'Limpieza', price: '$ 0.00', image: '/fregona.jpg' },
    { id: 35, title: 'Recogedor', category: 'Limpieza', price: '$ 0.00', image: '/recogedor.jpg' },
    { id: 36, title: 'Paño de limpieza', category: 'Limpieza', price: '$ 0.00', image: '/pano.jpg' }
  ];

  return (
    <div className="gift-list-wrapper">
      {/* Fondo de flores (imagen de fondo general) */}
      {/* Puedes usar lista-gift.jpg temporalmente para guiarte */}
      <div className="floral-background" style={{ backgroundImage: 'url(/lista-gift.jpg)' }}></div>



      <main className="gift-list-content">
        {/* Contenedor del escudo/corona con iniciales */}

        <img src={Logo} alt="" style={{ width: '40%', marginBottom: '40px' }} />


        <h1 className="main-title">Lista de casamiento virtual</h1>

        <div className="heart-divider">♥</div>

        <p className="description-text">
          AQUÍ PODRÁN ENCONTRAR<br />
          NUESTRA LISTA DE REGALOS.<br />
          ¡MUCHAS GRACIAS!
        </p>

        {/* Placeholder: Aquí irá la imagen de la rama morada */}
        <div className="branch-image-placeholder">
          <img src={Flor} alt="Adorno floral" />
        </div>


        {/* Contenedor Inferior: Ordenar por */}
        <div className="sort-container">
          <span className="sort-label">Ordenar por:</span>

          <div className="sort-select-box">
            {/* Ícono de regalo (puedes cambiarlo por un SVG luego) */}
            <span className="icon-gift">🎁</span>

            <select className="sort-select">
              <option value="mayor">Mayor precio</option>
              <option value="menor">Menor precio</option>
            </select>
          </div>
        </div>

        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-list-item">
              {/* <div className="product-image-box">
                Fallback en caso de que la imagen no cargue temporalmente
                <img src={product.image} alt={product.title} />
              </div> */}
              
              <div className="product-details">
                <h3 className="product-title">{product.title}</h3>
                <span className="product-category">{product.category}</span>
              </div>
              
              {/* <div className="product-action">
                <span className="product-price">{product.price}</span>
                <button className="btn-regalar">Regalar</button>
              </div> */}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default GiftListComponent