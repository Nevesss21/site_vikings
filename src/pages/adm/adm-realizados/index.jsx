import "./index.scss";
import NavAdm from "../../../components/Nav-adm";
import { Link } from "react-router-dom";

export default function AdmRealizados() {
  return (
    <div className="conteiner-realizados">
        <NavAdm/>
        <div className="principal">

      <input type="text"  className="pesquisa" placeholder="
      Pesquise e veja o seu relatório pela data ou nome.."/>

      <div className="fora">
        <h1>Relatorios já feitos</h1>

        <Link to='/adm-relatorio'>
          <div className="bloco">
          <div className="texto1">Relatório 01-21/05/2024
              <div className="icons">
                <img src="assets/images/lixeirabranca.png" alt="" />
                <img src="assets/images/canetabranca.png" alt="" />
              </div>
            </div>
          </div>
        </Link>

        <div className="bloco">

          <div className="texto">Relatório 01-21/05/2024
          <div className="icons">
            <img src="assets/images/lixeira.png" alt="" />
            <img src="assets/images/caneta.png" alt="" />
          </div>
          </div>
          
        </div>

        <div className="bloco">

          <div className="texto1">Relatório 01-21/05/2024
          <div className="icons">
            <img src="assets/images/lixeirabranca.png" alt="" />
            <img src="assets/images/canetabranca.png" alt="" />
          </div>
          </div>
          
        </div>

        <div className="bloco">

          <div className="texto">Relatório 01-21/05/2024
          <div className="icons">
          <img src="assets/images/lixeira.png" alt="" />
            <img src="assets/images/caneta.png" alt="" />
          </div>
          </div>

        </div>
  
      </div>
      <div  className="botaoConcluir">
      <a href=""><button>Concluir</button></a>
      </div>
    </div>
    </div>
  );
}

