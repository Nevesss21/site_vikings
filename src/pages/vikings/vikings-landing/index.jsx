import './index.scss'
import './fonts.scss'
import { Link } from 'react-router-dom';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Whats from '../../../components/Whats';


export default function Landingpage() {
    return (
        <div className="ladingpage">
            <Nav/>

            <div className='secao-inicial-landing'>

                <div className='texto'>
                <h1>PIONEIRISMO E MODERNIDADE
                EM CADA TRAÇO</h1>
                <button>VEJA NOSSAS TATTOOS</button>
                </div>

                <Whats/>
            
            </div>

            <div className='secao-estudio'>
                <h1>
                FAZENDO HISTÓRIA 
                NO MUNDO DA TATUAGEM DESDE 1977
                </h1>

                <div className='flex'>

                <div className='coluna'>
                    <p>Trabalho seguro e responsável na aplicação de piercings, retirada de tatuagens a laser e criação de obras de arte em sua pele.</p>
                    
                    <h1>ACESSIBILIDADE</h1>

                    <p>Somos pioneiros na adequação dos espaços do estúdio para o portador de mobilidade reduzida. Temos acesso adaptado desde a recepção até uma sala exclusiva de atendimento.</p>

                </div>

                <div className='coluna'>
                    <p>O maior estúdio de tatuagem da América Latina, com reconhecimento internacional, dezenas de prêmios e equipe especializada.</p>

                    <h1>BIOSSEGURANÇA</h1>
                    <p>AO Vikings Tattoo é certificada pela Vigilância Sanitária atuando sob rígidas normas de biossegurança e assepsia. Possui uma sala exclusiva para a esterilização dos equipamentos.</p>

                </div>
                </div>
                <button>CONHEÇA NOSSO ESTÚDIO</button>

            </div>

            <Rodape/>

        </div>
    );
}
