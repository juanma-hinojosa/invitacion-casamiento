import Flor from "../../../public/flor.png"

function GiftListComponent() {
  return (
    <div className="gift-list-wrapper">
      {/* Fondo de flores (imagen de fondo general) */}
      {/* Puedes usar lista-gift.jpg temporalmente para guiarte */}
      <div className="floral-background" style={{ backgroundImage: 'url(/lista-gift.jpg)' }}></div>

      

      <main className="gift-list-content">
        {/* Contenedor del escudo/corona con iniciales */}
        <div className="crest-container">
          <span className="heart-icon">♥</span>
          
          {/* Placeholder: Aquí irá la imagen de la corona de laureles */}
          <div className="crest-image-placeholder">
            <span className="initials">R | J</span>
          </div>
          
          <span className="heart-icon">♥</span>
        </div>

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
      </main>
    </div>
  );
}

export default GiftListComponent