import './index.scss'


import { Link } from 'react-router-dom';


export default function Nav() {
  return (
    <div className="Nav">
      <Link to={'/'}><img src="/assets/images/logovikings.webp" alt="logoVikings" /></Link>

      <div className="links">
      <Link className="animacao" to={'/'}>HOME</Link>
        <Link  className="animacao" to={'/Estudio'}>ESTÚDIO</Link>
        <Link  className="animacao" to={'/'}>SERVIÇOS</Link>
        <Link  className="animacao" to={'/'}>AGENDAMENTO</Link>
        <Link  className="animacao" to={'/estilo'}>ESTILOS</Link>
        <Link  className="animacao"to={'/Contato'}>CONTATO</Link>
        <Link to={'/'}> <img  className="image" src="/assets/images/instagram.png" alt="instagram" /> </Link>
        <Link to={'/'}><img className="image" src="/assets/images/facebook.png" alt="facebook" /></Link>
        <Link to={'/adm-landing'}> < img className="image" src="/assets/images/User.png" alt="user" /></Link>
      </div>
    </div>
  );
}