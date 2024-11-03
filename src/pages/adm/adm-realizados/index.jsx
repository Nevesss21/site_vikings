import "./index.scss";
import NavAdm from "../../../components/Nav-adm";
import { Link } from "react-router-dom";

export default function AdmRealizados() {
  return (
    <div className="relatorio-realizado">
      <NavAdm/>
      <div className="bloco">

     <input type="text" placeholder="Pesquise e veja o seu relatório pela data ou nome.." />

        <div className="area-cinza">
          <h1>RELATÓRIOS JA REALIZADOS</h1>

          <Link to='/adm-relatorio'>
            <div className="bloco-escuro">
              <h3>Relatório01-21/03/2024</h3>
              <div className="coluna">
                <img src="/assets/images/lixeirabranca.png" alt="apagar" />
                <img src="/assets/images/canetabranca.png" alt="editar" />
              </div>
            </div>
          </Link>

          <Link>
            <div className="bloco-claro">
              <h3>Relatório02-21/03/2024</h3>
              <div className="coluna">
              <img src="assets/images/lixeira.png" alt="apagar" />
              <img src="assets/images/caneta.png" alt="editar" />
              </div>
            </div>
          </Link>

          <Link>   
            <div className="bloco-escuro">
            
            </div>
          </Link>
          <Link>
            <div className="bloco-claro">
            
            </div>
          </Link>
        </div>
        <Link to ='/adm-cadastrar-relatorio'><button>REALIZAR NOVO RELATO</button></Link>
      </div>
    </div>
 
  );
}

