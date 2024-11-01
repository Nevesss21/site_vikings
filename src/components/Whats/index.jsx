import './index.scss'

import { Link } from 'react-router-dom';


export default function Whats() {
  return (
    <div className="Whats">
      <Link to={'https://wa.me/5511950234647?text=Gostaria de agendar minha seção'}>
        <img src="/assets/images/whatsapp.png" alt="whatsapp" />
        <p>Agende sua Tatto pelo Whatsapp</p>
      </Link>
    </div>
  );
}