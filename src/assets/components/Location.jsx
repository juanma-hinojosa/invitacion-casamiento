import './Location.css';
import Flor from "../../../public/flor.png"
import { Icon } from '@iconify/react';
// import MapIcon from '@iconify-react/bxs/map';

const Location = () => {
  return (
    <div className="location-wrapper">
      {/* Fondo con las flores ya incluidas */}
      {/* Reemplaza 'fondo-flores.jpg' con tu imagen real */}
      <div className="floral-background" style={{ backgroundImage: 'url("../../../public/flor.png)' }}></div>

      <main className="location-content">

        <span className="heart-icon top-heart">♥</span>

        {/* Divisor superior (Línea - Corazón - Línea) */}
        {/* Si tienes una imagen para este divisor, reemplaza este div por un <img /> */}
        <div className="divider-line">
          <span className="line"></span>
          <span className="diamond">♦</span>
          <span className="line"></span>
        </div>

        <h2 className="section-title">
          LUGAR DEL<br />CASAMIENTO
        </h2>

        {/* Divisor de puntos (Punto - Corazón - Punto) */}
        <div className="divider-dots">
          <span className="dot">•</span>
          <span className="heart-icon small-heart">♥</span>
          <span className="dot">•</span>
        </div>

        <p className="description-text">
          AQUÍ PODRÁN ENCONTRAR<br />
          LA DIRECCIÓN DONDE<br />
          CELEBRAREMOS ESTE DÍA<br />
          TAN ESPECIAL.
        </p>

        {/* Imagen de la rama morada */}
        <img
          src={Flor}
          alt="Adorno floral"
          className="branch-img"
        />

        {/* <span className="heart-icon mid-heart">♥</span>+ */}

        {/* Foto del Lugar */}
        {/* <div className="photo-container">
          <img
            src="https://elgritodelsur.com.ar/wp-content/uploads/2018/10/comuna-1.jpg"
            alt="Sede Comunal 1"
            className="location-photo"
          />
        </div> */}

        <a
          href="https://maps.app.goo.gl/qE9HVzqtBNm8v3WG6"
          target="_blank"
          rel="noopener noreferrer"
          className="photo-link"
        >
          <div className="photo-container">
            <img
              src="https://elgritodelsur.com.ar/wp-content/uploads/2018/10/comuna-1.jpg"
              alt="Sede Comunal 1"
              className="location-photo"
            />
          </div>
        </a>

        {/* Información de la ubicación */}
        <div className="location-info">
          {/* Ícono de Ubicación (Pin) */}

          <Icon icon="mynaui:map-pin-solid" style={{ fontSize: '2rem', marginBottom: '30px' }} />

          <h3 className="location-name">Sede Comunal 1</h3>
          <p className="location-city">Humberto 1° 250, CABA</p>
        </div>

        {/* Divisor Inferior (Hojas/Flechas - Corazón - Hojas/Flechas) */}
        {/* Si lo tienes como imagen separada, colócalo aquí */}
        <div className="bottom-divider">
          <span className="arrows">»»»</span>
          <span className="heart-icon small-heart">♥</span>
          <span className="arrows">«««</span>
        </div>

      </main>
    </div>
  );
};

export default Location;