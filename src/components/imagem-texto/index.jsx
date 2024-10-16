import './index.scss'
import './fonts.scss'
import { Link } from 'react-router-dom';


export default function ImagemTexto() {
  return (
    <div className="Whats">
      <Link to={'/'}>
        <img src="/assets/images/whatsapp.png" alt="whatsapp" />
        <p>Agende sua Tatto pelo Whatsapp</p>
      </Link>
    </div>
  );
}