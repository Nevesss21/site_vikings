

import { BlocoPreto } from '../../components';
import { Bloco } from '../../components';
import Cabecalho from '../../components';
import './index.scss';
import './fonts.scss';

export default function AdmSolicitacoes(){
    return(
    <div className='principal-solicitacoes'>

        <Cabecalho/>

        <div className="botao">

        <a href="/adm-agendamento"> <button className='botao1'>Sessões Marcadas</button></a>
           
        </div>

       

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

        <br/>
        

        <div className="botao">

            <a href="/adm-marcar">
        <button>Marcar Consulta</button>
       </a>
     
            </div>
       

    </div> 
    );
}