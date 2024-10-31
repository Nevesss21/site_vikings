import Bloco from '../../../components/Bloco';
import NavAdm from '../../../components/Nav-adm'

import './index.scss';


export default function AdmSolicitacoes(){
    return(
      

    <div className='principal-solicitacoes'>

   <NavAdm/>
    
        <h1 className='titulo'>Solicitações</h1>

    <div className="principal">

     <div className="fora">

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

       
        <button>Marcar Consulta</button>
        </div>
        </div>
        </div>
    );
}
