import "./index.scss";
import { Link } from "react-router-dom";

export default function NotFound() {

  return (
    <div className="not-found">

      <div className="centro">
        <img src="/assets/images/logo-vikings.webp" alt="logoVikings" />

        <div className="text">
          <h1>404: Destino não encontrado</h1>
          <p>A página que você procura está fora do mapa. Por que não tenta retornar para a nossa página inicial e explorar novamente?</p>
          <Link to='/'>
            <button>VOLTAR</button>
          </Link>
        </div>
      </div>

    </div>
  );
}
