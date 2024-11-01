import Bloco from '../../../components/Bloco';
import NavAdm from '../../../components/Nav-adm'
import { Link } from 'react-router-dom';

import './index.scss';


export default function AdmSolicitacoes(){
    return(
      <div className="solicitacao">
      <NavAdm/>
      <div className="bloco">

     <input type="text" placeholder="Pesquise e veja o a sessão por cpf ou nome.." />

        <div className="area-cinza">
          <h1>SESSÕES MARCADAS</h1>

          <Link to='/adm-infocliente'>
            <div className="bloco-escuro">
              <div className='coluna'>
                <h1>ABNER JOSÉ</h1>
                <h3>CPF: 600.761.488-31</h3>
              </div>

              <div className='flex'> 
              <div className='coluna'>
                <h3>Data: 16/05/2024</h3>
                <h3>Horário: 17:37</h3>
              </div>
              <div className="coluna">
                <img src="/assets/images/lixeirabranca.png" alt="apagar" />
                <img src="/assets/images/canetabranca.png" alt="editar" />
              </div>
              </div>
            </div>
          </Link>

          <Link>
            <div className="bloco-claro">
            <div className='coluna'>
                <h1>ABNER JOSÉ</h1>
                <h3>CPF: 600.761.488-31</h3>
              </div>

              <div className='flex'> 
              <div className='coluna'>
                <h3>Data: 16/05/2024</h3>
                <h3>Horário: 17:37</h3>
              </div>
              <div className="coluna">
                <img src="/assets/images/lixeirabranca.png" alt="apagar" />
                <img src="/assets/images/canetabranca.png" alt="editar" />
              </div>
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
      
      </div>
    </div>
 
    );
}
