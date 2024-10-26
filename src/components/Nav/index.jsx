import './index.scss'


import { Link } from 'react-router-dom';


export default function Nav() {
  return (
    <div className="Nav">
      <Link to={'/'}><img src="/assets/images/logo-vikings.webp" alt="logoVikings" /></Link>

      <div className="links">
        <Link className="animacao" to={'/'}>HOME</Link>
        <Link  className="animacao" to={'/Estudio'}>ESTÚDIO</Link>
        <Link  className="animacao" to={'/Agendamento'}>AGENDAMENTO</Link>
        <Link  className="animacao" to={'/Estilo'}>ESTILOS</Link>
        <Link  className="animacao"to={'/Contato'}>CONTATO</Link>
        <Link to={'/'}> <img  className="image" src="/assets/images/instagram.png" alt="instagram" /> </Link>
        <Link to={'/'}><img className="image" src="/assets/images/facebook.png" alt="facebook" /></Link>
        <Link to={'/adm-login'}> < img className="image" src="/assets/images/User.png" alt="user" /></Link>
      </div>
    </div>
  );
}