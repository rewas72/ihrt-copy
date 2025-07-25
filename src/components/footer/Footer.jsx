import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/footer.css';

import logoCnrs from '../../assets/logo_CNRS.svg';
import logoIrht from '../../assets/logo.svg';
import campusLogo from '../../assets/campus-condorcet-logo.svg';

const Footer = () => {
  const navigate = useNavigate();


  

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logos">
          <img src={logoCnrs} alt="CNRS" />
          <img src={logoIrht} alt="IRHT" />
          <img src={campusLogo} alt="Campus Condorcet" />
        </div>

        <div className="footer-info">
          <div>
            <h4>Paris - Aubervilliers</h4>
            <p>14, Cours des Humanités<br />93322 Aubervilliers</p>
            <p><strong>Telefon</strong><br />+33 1 88 12 18 46</p>
          </div>

          <div>
            <h4>Orléans</h4>
            <p>3b Bilimsel Araştırma Caddesi<br />45071 Orléans</p>
            <p><strong>Telefon</strong><br />+33 2 38 25 53 25</p>
          </div>

          <div>
            <h4>Hakkında</h4>
            <p>
              1937 yılında kurulan Metin Araştırma ve Tarih Enstitüsü, CNRS'nin ayrı bir birimidir. Temel olarak Orta Çağ'a ait olmak üzere, antik ve modern dönemlere uzanan el yazmaları üzerine araştırmalara odaklanır.
            </p>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            <i className="icon icon-butterfly" />
            <i className="icon icon-facebook" />
            <i className="icon icon-instagram" />
            <i className="icon icon-youtube" />
            <i className="icon icon-linkedin" />
          </div>
          <div className="footer-search">
            <input type="text" placeholder="Araştırmak için" />
            <button>🔍</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 Ulusal Bilimsel Araştırma Merkezi Metin Araştırmaları ve Tarihi Enstitüsü - 
          <span className="footer-link" onClick={() => navigate('/legal')}> Yasal uyarılar</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
