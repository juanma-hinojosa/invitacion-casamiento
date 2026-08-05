import CountdownTimer from "../components/CountdownTimer";

function HomePage() {

  // Fecha de la boda (Año, Mes (0-11), Día, Hora, Minuto)
  // En tu caso: 28 de Agosto de 2026, 9:30 AM
  const weddingDate = new Date('2026-08-28T09:30:00');

  return (
    <div className="invitation-wrapper">
      {/* Puedes usar hero.jpg como fondo absoluto o imagen aquí luego */}
      <div className="hero-background" style={{ backgroundImage: 'url(/hero.jpg)' }}></div>

      <div className="invitation-content">
        {/* Navegación (Se puede ocultar en mobile o hacer un menú hamburguesa luego) */}
        <nav className="top-nav">
          <a href="#historia">NUESTRA HISTORIA</a>
          <a href="#boda">DÍA DE LA BODA</a>
          <a href="#viaje">VIAJE</a>
          <a href="#codigo">CÓDIGO DE VESTIMENTA</a>
          <a href="#galeria">GALERÍA</a>
          <a href="#rsvp">RSVP</a>
        </nav>

        {/* Sección Principal */}
        <main className="main-section">
          <div className="initials-crest">
            <span className="initials">R | J</span>
          </div>

          <p className="subtitle">¡NOS CASAMOS!</p>
          <h1 className="title">Rafaela & Juan</h1>

          <div className="date-display">
            <span>28</span> <span className="date-separator">|</span> <span>08</span> <span className="date-separator">|</span> <span>2026</span>
          </div>

          <div className="location">
            <span className="icon">📍</span>
            <p>Sede Comunal 1<br />Buenos Aires</p>
          </div>

          <div className="heart-divider">♥</div>

          <div className="faltan-section">
            <span className="arrows">»»»</span>
            <span className="faltan-text">FALTAN</span>
            <span className="arrows">«««</span>
          </div>

          {/* Temporizador */}
          <CountdownTimer targetDate={weddingDate} />

          {/* Caja de Horario */}
          <div className="time-box">
            <div className="clock-icon">🕒</div>
            <div className="time-info">
              <p className="time-box-label">HORARIO DE LA BODA</p>
              <p className="time-box-value">9:30 de la mañana</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage