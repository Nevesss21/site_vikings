import "./index.scss";
import { Link } from "react-router-dom";

export default function AdmMarcar() {
  return (
    <div className="adm-marcar">
      <header>
        <img src="/assets/images/logo-vikings.webp" alt="logo-vikings" />

        <div className="links">
          <Link to='/adm-landing'>ARQUIVADAS</Link>
          <Link to='/adm-landing'>HOME</Link>
          <Link to='/adm-solicitacoes'>VOLTAR</Link>
        </div>
      </header>
      <div c>

      </div>


    </div>
  );
}
