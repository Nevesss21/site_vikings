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
      
    </div>
  );
}


