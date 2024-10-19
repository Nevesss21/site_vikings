import './index.scss'
import './fonts.scss'
import { Link } from 'react-router-dom';


export default function Nav() {
  return (
    <div className="Nav">
      <Link to={'/'}><img src="/assets/images/logovikings.webp" alt="logoVikings" /></Link>

      <div className="links">
        <Link to={'/'}>HOME</Link>
        <Link to={'/Estudio'}>ESTÚDIO</Link>
        <Link to={'/'}>SERVIÇOS</Link>
        <Link to={'/'}>AGENDAMENTO</Link>
        <Link to={'/Contato'}>CONTATO</Link>
        <Link to={'/'}><img src="/assets/images/instagram.png" alt="instagram" /></Link>
        <Link to={'/'}><img src="/assets/images/facebook.png" alt="facebook" /></Link>
        <Link to={'/adm-landing'}><img src="/assets/images/User.png" alt="user" /></Link>
      </div>
    </div>
  );
}