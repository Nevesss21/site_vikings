import './index.scss'

import { Link } from 'react-router-dom';


export default function Rodape() {
  return (
    <div className="Rodape">
      <div className='line' />
      <div className="align">
        <Link to={'/'}><img src="/assets/images/logovikings.webp" alt="logo" /></Link>

        <div className="links">
          <h1>ONDE ESTAMOS</h1>
          <div className="text">
            <p>R. Prof. João de Oliveira Torres, 405 </p>
            <p>Jardim Analia Franco, São Paulo - SP</p>
            <p>CEP 03337-010</p>
          </div>
        </div>
        <div className="links">
          <h1>CONTATO</h1>
          <div className="text">
            <p>(11)94486-3323</p>
            <p>contato@vikingsstudio.com.br</p>
          </div>
          <div className="alinharImagens">
            <Link to={'/'}><img src="/assets/images/facebook.png" alt="facebook" /></Link>
            <Link to={'/'}><img src="/assets/images/instagram.png" alt="instagram" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}