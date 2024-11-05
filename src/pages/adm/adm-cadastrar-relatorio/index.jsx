
import NavAdm from "../../../components/Nav-adm";
import "./index.scss";
import { Link } from "react-router-dom";

export default function CadastrarRelatorio() {
  return (
    <div className="cadastrar-relatorio">
      <NavAdm />
      <div className="secao-cadastro">
        <div className="cadastrar">
          <div className="espaco">
            <div className="input">
              <h3>Informe a data do relatório</h3>
              <input type="date" />
            </div>
          </div>

          <div className="escolha">
            <h1>Escolha os filtros do seu relatorio</h1>

            <select name="selecao" id="selecao">
              <option>Selecione...</option>
              <option value="Total de pessoas">Total de pessoas</option>
              <option value="Renda Final">Renda Final</option>
              <option value="Clientes do gênero masculino">Clientes do gênero masculino</option>
              <option value="Clientes do gênero feminino">Clientes do gênero feminino</option>
              <option value="Clientes do genero igua a outro">Clientes do genero igua a outro</option>
              <option value="Clientes com idade superior a 30">Clientes com idade superior a 30 anos</option>
              <option value="Clientes com idade superior igual a 18">Clientes com idade superior igual a 18</option>
              <option value="Clientes com idade menor que 18">Clientes com idade menor que 18</option>
              <option value="Todas as opcões">Todas as opcões</option>
            </select>
           
          </div>

          <div className="botoes">
            <Link to="/adm-realizados">
              <button>Ver Relatórios</button>
            </Link>
            <button>Criar novo Relatório</button>
          </div>
        </div>
      </div>
    </div>
  );
}
