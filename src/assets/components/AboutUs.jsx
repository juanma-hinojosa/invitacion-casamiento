import './AboutUs.css';
import Nosotros from "../../../public/nosotros.png"
import Us from "../../../public/us.png"

const AboutUs = () => {
  return (
    <div className="about-us-wrapper">
      {/* Imagen de fondo que ya contiene el color lila y las flores */}
      <div className="floral-background" style={{ backgroundImage: 'url(/fondo-flores-sobre-nosotros.jpg)' }}></div>

      {/* Header Superior (puedes extraer esto a un componente <Header /> si se repite en todas las vistas) */}
      {/* <header className="top-header">
        <span className="logo-text">R & J</span>
        <button className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header> */}

      <main className="about-us-content">
        
        <h2 className="section-title">
          SOBRE NOSOTROS
        </h2>

        {/* Divisor: Línea - Punto - Corazón - Punto - Línea */}
        <div className="divider-complex">
          <span className="line"></span>
          <span className="dot">•</span>
          <span className="heart-icon">♥</span>
          <span className="dot">•</span>
          <span className="line"></span>
        </div>

        {/* Contenedor de la foto en forma de arco */}
        <div className="arch-photo-container">
          <div className="arch-border-inner">
            <img 
              src={Us}
              alt="Rafaela y Juan" 
              className="couple-photo"
            />
          </div>
        </div>

        {/* Divisor: Línea - Punto - Corazón - Punto - Línea */}
        <div className="divider-complex">
          <span className="line"></span>
          <span className="dot">•</span>
          <span className="heart-icon">♥</span>
          <span className="dot">•</span>
          <span className="line"></span>
        </div>

        {/* Primer bloque de texto (Sans-serif) */}
        <p className="story-text">
          Desde que nuestros caminos se cruzaron,<br />
          sabíamos que era algo especial.<br />
          Entre risas, aventuras y sueños compartidos,<br />
          construimos un amor que crece cada día más.
        </p>

        {/* Divisor: Hojas/Flechas - Corazón - Hojas/Flechas */}
        {/* Si tienes este adorno como imagen separada, usa una etiqueta <img> en su lugar */}
        <div className="divider-arrows">
          <span className="arrows">»»»</span>
          <span className="heart-icon">♥</span>
          <span className="arrows">«««</span>
        </div>

        {/* Segundo bloque de texto (Serif cursiva) */}
        <p className="thank-you-text">
          Hoy, comenzamos el resto de nuestras vidas juntos.<br />
          ¡Gracias por ser parte de este momento único!
        </p>

        {/* Divisor final: Línea - Corazón hueco - Línea */}
        <div className="divider-bottom">
          <span className="line"></span>
          <span className="heart-outline">♡</span>
          <span className="line"></span>
        </div>

      </main>
    </div>
  );
};

export default AboutUs;