import NavAdm from "../../../components/Nav-adm";
import "./index.scss";
import { Link } from "react-router-dom";


export default function CadastrarRelatorio() {

  return (
    <div className="cadastrar-relatorio">
      <NavAdm />
      <div className="secao-cadastro">
        <div className="cadastrar">
          <h1>VEJA OS RELATÓRIOS JA FEITOS OU CRIE UM NOVO COM OS DADOS ATUAIS</h1>

          <div className="botoes">
            <Link to="/adm-realizados">
              <button>Ver Relatórios</button>
            </Link>
            <Link to='/adm-relatorio'>
              <button>Criar novo Relatório</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
