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
            <a href="/" className='animacao'>Home</a>
            <a href="/adm-marcar" className='animacao'>Marcar</a>
            <a href="#" className='animacao' >Arquivadas</a>
        
        </div>
        </header>
        <h1 className='titulo'>Solicitações</h1>
        <div className='solicitacoesped'>
            <br/>
            <Bloco/>
            <br/>

            <br/>
            <Bloco/>
            <br/>

            <br/>
            <Bloco/>
            <br />
        </div>
        

        <button>Marcar Consulta</button>
            
     
    </div> 
    );
}