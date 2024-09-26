import './index.scss';
import './fonts.scss';
export default function AdmLanding() {
  return (
    <div className="conteiner-adm">
       
        <header>
            <div className='imagem-logo'>
                <img src="/assets/images/logo-vikings.png" alt="" />
            </div>

            <div className='links-principal'>
                <a href="">HOME</a>
                <a href="">RELATÓRIOS</a>
                <a href="">SEÇÕES</a>
                <a href="">AGENDAMENTO</a>
            </div>
        </header>

            <div className='corpo'>

                <div className='texto'>
                <h1>CONSULTE AQUI OS HORARIOS AGENADADOS</h1>
                </div>
                
                <div className='text'>
                <h3>Você pode ter acesso a todos os horarios e informações dos 
                clientes juntamente com as suas opiniões e preferências</h3>
                </div>
            </div>

            <div className='imagens'>

            <div className='imagem-cinza'>
                <div className='relatar'>
                <h1>Faça o seu relato. Defina como foi sua progressão do dia, semana, mes e ano</h1>
                <button>Relatar</button>
                </div>
            </div>

            <div className='imagem-cinza-claro'>
                <div className='seguir'>
                 <h1>Analise as seções pendentes e faça você mesmo o agendamento das seções </h1>
                 <button>Seguir</button>
                </div>
            </div>

            <div className='imagem-preta'>
                <div className='consulte'>
                <h1>Consulte  as informações da maneira que quiser, decida o filtro para melhor aproveitamento das informações</h1>
                <button>Consultar</button>
                </div>

            </div>
            </div>

      
    </div>
  );
}


