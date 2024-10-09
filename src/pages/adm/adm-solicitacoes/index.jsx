

import { BlocoPreto } from '../../components';
import { Bloco } from '../../components';
import Cabecalho from '../../components';
import './index.scss';
import './fonts.scss';

export default function AdmSolicitacoes(){
    return(
    <div className='principal-solicitacoes'>

        <Cabecalho/>

        <h1 className='titulo'>Solicitações</h1>

        <div className='solicitacoesped'>

            <br/>

            <Bloco/>

            <br/>

            <BlocoPreto />
            <br/>

            <Bloco/>

            <br/>

            <BlocoPreto />

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