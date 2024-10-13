import './index.scss';
import './fonts.scss';
import Cabecalho from '../../../components/Cabecalho';
import Bloco from '../../../components/bloco';
import BlocoPreto from '../../../components/bloco-preto';

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