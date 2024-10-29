import "./index.scss";

export default function AdmRealizados() {
  return (
    <div className="conteiner-realizados">
       
    <header>

    <div className='imagem-logo'>
    <img src="/assets/images/logo-vikings.webp" alt="logo-vikings" />
    </div>

    <div className='links-principal'>
    <a href="/adm-landing" className='animacao'>HOME</a>
    <a href="" className='animacao'>RELATÓRIOS</a>
    <a href="/adm-solicitacoes" className='animacao'>SEÇÕES</a>
    <a href="/adm-agendamento" className='animacao'>AGENDAMENTO</a>
    </div>

     </header>


        <div className="principal">

      <input type="text"  className="pesquisa" placeholder="
      Pesquise e veja o seu relatório pela data ou nome.."/>

      <div className="fora">
        <h1>Relatorios já feitos</h1>

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
  
      </div>
      <div  className="botaoConcluir">
      <a href=""><button>Concluir</button></a>
      </div>
    </div>
    </div>
  );
}

