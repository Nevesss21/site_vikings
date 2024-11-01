
import NavAdm from '../../../components/Nav-adm'
import { Link } from 'react-router-dom';

import './index.scss';


export default function AdmSolicitacoes(){
    return(
      <div className="solicitacao">
      <NavAdm/>
      <div className="bloco">
        
        <div className="area-cinza">
          <h1>SOLICITAÇÕES</h1>

          <Link>
            <div className="bloco-escuro">
              <div className='coluna'>
                <h1>ABNER JOSÉ</h1>
                <h3>CPF: 600.761.488-31</h3>
              </div>
 
              <div className='coluna'>
                <h3>Data: 16/05/2024</h3>
                <h3>Horário: 17:37</h3>
              </div>             
            </div>
          </Link>

          <Link>
            <div className="bloco-claro">
            <div className='coluna'>
                <h1>ABNER JOSÉ</h1>
                <h3>CPF: 600.761.488-31</h3>
              </div>

       
              <div className='coluna'>
                <h3>Data: 16/05/2024</h3>
                <h3>Horário: 17:37</h3>
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
        <div className='botoes'> 

        <Link to='/adm-secoes'><button>VER SESSÕES MARCADAS</button></Link>
        <Link to='/adm-marcar'><button>MARCAR NOVA SESSÃO</button></Link>

        </div>
      </div>
    </div>
 
    );
}
