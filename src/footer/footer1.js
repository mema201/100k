import React from 'react';
import './footer1.css';
import logo from'../page1/0cb7c3fc2eb6dff3b84531cd3bd54e38a99f2b19.png'

const Footer1 = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>
            Vous avez un projet ?<br />
            Discutons-en !
          </h3>
          <p>
            Nous serons heureux de répondre à vos questions et discuter de la manière
            dont nous pouvons vous aider à la réalisation de votre idée
          </p>
          <button className="whatsapp-button">WhatsApp</button>
          <button className="whatsapp-button">Email</button>
          <div className="phone">
            {/* Tu peux insérer ici un numéro ou une icône */}
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-logo">
            <img src={logo} alt="Logo DA Studio" />
          </div>

          <div className="socials">
            {/* Icônes ou liens de réseaux sociaux */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © DA STUDIO, tous droits réservés
      </div>
    </footer>
  );
};

export default Footer1;
