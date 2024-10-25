import Bloco from '../../../components/Bloco';

import './index.scss';


export default function AdmSolicitacoes(){
    return(
    <div className='principal-solicitacoes'>
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
        
        <div className="botao">
        <button>Marcar Consulta</button>
            
            </div>
       
    </div> 
    );
}