import './index.scss';
import './fonts.scss';

export default function AdmLanding() {
  return (
    <div className="conteiner-adm">

       
        <main>
        <header>
                
            <div className='imagem-logo'>
                <img src="/public/assets/images/logovikings.webp" alt="logo-vikings" />
            </div>

            <div className='links-principal'>
                <a href="/" className='animacao'>HOME</a>
                <a href="" className='animacao'>RELATÓRIOS</a>
                <a href="/adm-solicitacoes" className='animacao'>SEÇÕES</a>
                <a href="/adm-agendamento"className='animacao'>AGENDAMENTO</a>
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
                        <button className='oi1'>Relatar <span className='contorno1'></span></button>
                    </div>
                </div>

                <div className='imagem-cinza-claro'>
                    <div className='seguir'>
                        <h1>Analise as seções pendentes e faça você mesmo o agendamento das seções </h1>
                        <button className='oi2'>Seguir <span className='contorno2'></span></button>
                    </div>
                </div>

                <div className='imagem-preta'>
                    <div className='consulte'>
                        <h1>Consulte  as informações da maneira que quiser, decida o filtro para melhor aproveitamento das informações</h1>
                        <button className='oi1'>Consultar <span className='contorno1'></span></button>
                    </div>
                </div>

            </div>

            <div className='duvidas'>

                <hr className='linha' />

                <div className='rodape'>
                    <img src="/assets/images/valhalla-logo 3.png" alt="logo-valhalla" />
                    <h1>Duvidas</h1>
                    <p>Caso haver duvidas ou possiveis ocorrências,entre em conato com a  equipe de programadores da Valhalla diretamente no site</p>
                </div>


                <div className='botao-valhalla'>
                    <button>Ir para Valhalla <img src="/assets/images/valhalla-logo 3.png" alt="logo-valhalla" /></button>
                   
                </div>

            </div>
            </main>

      
    </div>
  );
}


