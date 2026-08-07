import { Icon } from '@iconify/react';
import './Donations.css';
import Logo from "../../../public/logo.png"

const Donations = () => {
  return (
    <div className="donations-wrapper">
      <div className="floral-background" style={{ backgroundImage: 'url(/fondo-flores-donaciones.jpg)' }}></div>

      <header className="top-header">
        {/* <span className="logo-text">R & J</span>
        <div className="menu-container">
          <span>MENU</span>
          <Icon icon="mdi:menu" className="menu-icon" />
        </div> */}
      </header>

      <main className="donations-content">
        {/* <div className="crest-placeholder"> */}
        {/* <span className="initials">R | J</span> */}
        <img src={Logo} alt="" style={{ width: '40%' }} />
        {/* </div> */}

        <h1 className="main-title">Lista de Regalos Virtual:<br />Donaciones</h1>
        <span className="heart-icon">♥</span>

        <p className="description">
          Lo más importante para nosotros es poder compartir este momento tan especial con ustedes. Si además desean hacernos un regalo, cualquier aporte, grande o pequeño, nos ayudará a dar los primeros pasos en esta nueva etapa: construir nuestro hogar y hacer realidad nuestra luna de miel.
          <br /><br />
          Cada gesto significa muchísimo para nosotros, y lo recibiremos con enorme cariño y gratitud.
          <br /><br />
          ¡Gracias por acompañarnos y por ser parte de este nuevo comienzo!
        </p>

        <h2 className="subtitle">¿Cómo nos puedes ayudar?</h2>
        <div className="help-icons">
          <Icon icon="mdi:heart-outline" />
          <Icon icon="mdi:currency-usd" />
          <Icon icon="mdi:bank-outline" />
        </div>

        {/* Bloque Pix */}
        <div className="payment-block">
          <div className="payment-header">
            <span>Transferencia Bancaria (Pix)</span>
            <Icon icon="ic:baseline-pix" style={{ fontSize: '3rem' }} />

            {/* <img src="/pix-logo.png" alt="Pix" className="payment-logo" /> */}
          </div>
          <p className="label">Chave Pix (CPF / E-mail): 49969044885</p>
          <div className="input-row">
            {/* <input type="text" readOnly value="[ Digite a Chave Pix ]" /> */}
            {/* <Icon icon="mdi:content-copy" className="copy-icon" /> */}
          </div>
          <p className="beneficiary">Nome do Beneficiário: <strong>Rafaela Carolina Couto Silva</strong></p>
        </div>

        {/* Bloque Mercado Pago */}
        <div className="payment-block">
          <div className="payment-header">
            <span>Mercado Pago (Digital)</span>

            <Icon icon="simple-icons:mercadopago" style={{ fontSize: '3rem' }} />
            {/* <img src="/mercadopago-logo.png" alt="MP" className="payment-logo" /> */}
          </div>
          <p className="label">Alias: juanma.hinojosa</p>
          <p className="beneficiary">Titular: <strong>Juan Manuel Hinojosa Polo</strong></p>

          <div className="input-row">
            {/* <input type="text" readOnly value="[ alias.mercado.pago.rj ]" />
            <Icon icon="mdi:content-copy" className="copy-icon" /> */}
          </div>
        </div>


      </main>
    </div>
  );
};

export default Donations;