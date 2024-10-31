import Bloco from '../../../components/Bloco';

import './index.scss';


export default function AdmSolicitacoes(){
    return(

    <div className='principal-solicitacoes'>

    <header>
        
        <div className='imagem-logo'>
            <img src="/assets/images/logo-vikings.webp" alt="logo-vikings" />
        </div>
        
        <div className='links-principal'>
            <a href="/adm-landing" className='animacao'>Home</a>
            <a href="/adm-marcar" className='animacao'>Marcar</a>
            <a href="#" className='animacao' >Arquivadas</a>
        
        </div>
        </header>
    
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
