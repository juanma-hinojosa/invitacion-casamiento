const GiftCard = ({ product }) => {
  return (
    <div className="gift-card">
      <div className="gift-image-container">
        {/* Asegúrate de que las rutas de las imágenes existan en tu carpeta public */}
        <img src={product.image} alt={product.title} className="gift-image" />
      </div>
      <div className="gift-info">
        <h3 className="gift-title">{product.title}</h3>
        <p className="gift-price">{product.price}</p>
        {/* Aquí luego puedes agregar la lógica para que abra Mercado Pago o el detalle */}
        <button className="gift-button">Regalar</button>
      </div>
    </div>
  );
};

export default GiftCard;