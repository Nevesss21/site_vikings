import './index.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Atualiza o estado de `isMobile` ao redimensionar a tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="Nav">
      <div className="itens">
        {/* Logo */}
        <Link to="/">
          <img src="/assets/images/logo-vikings.webp" alt="logoVikings" className="logo" />
        </Link>

        {/* Menu para Desktop */}
        {!isMobile && (
          <nav className="links">
            <Link className="animacao" to="/">HOME</Link>
            <Link className="animacao" to="/Estudio">ESTÚDIO</Link>
            <Link className="animacao" to="/Agendamento">AGENDAMENTO</Link>
            <Link className="animacao" to="/Estilo">ESTILOS</Link>
            <Link className="animacao" to="/Contato">CONTATO</Link>
            <Link to="https://www.instagram.com/andre_artes_visuais">
              <img className="image" src="/assets/images/instagram.png" alt="instagram" />
            </Link>
            <Link to="https://www.facebook.com/andre.talentonasmaos">
              <img className="image" src="/assets/images/facebook.png" alt="facebook" />
            </Link>
            <Link to="/adm-login">
              <img className="image" src="/assets/images/User.png" alt="user" />
            </Link>
          </nav>
        )}

        {/* Menu Mobile */}
        {isMobile && (
          <>
            {/* Botão Hamburguer */}
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>

            {/* Menu Mobile */}
            {isMenuOpen && (
              <nav className="menu-mobile">
                <Link className="animacao" to="/" onClick={toggleMenu}>HOME</Link>
                <Link className="animacao" to="/Estudio" onClick={toggleMenu}>ESTÚDIO</Link>
                <Link className="animacao" to="/Agendamento" onClick={toggleMenu}>AGENDAMENTO</Link>
                <Link className="animacao" to="/Estilo" onClick={toggleMenu}>ESTILOS</Link>
                <Link className="animacao" to="/Contato" onClick={toggleMenu}>CONTATO</Link>
                <Link to="https://www.instagram.com/andre_artes_visuais" onClick={toggleMenu}>
                  <img className="image" src="/assets/images/instagram.png" alt="instagram" />
                </Link>
                <Link to="https://www.facebook.com/andre.talentonasmaos" onClick={toggleMenu}>
                  <img className="image" src="/assets/images/facebook.png" alt="facebook" />
                </Link>
                <Link to="/adm-login" onClick={toggleMenu}>
                  <img className="image" src="/assets/images/User.png" alt="user" />
                </Link>
              </nav>
            )}
          </>
        )}
      </div>
    </header>
  );
}
