import "./index.scss";

export default function AdmRealizados() {
  return (
    <div className="conteiner-realizados">
       <header>

    <div className='imagem-logo'>
    <img src="/assets/images/logovikings.webp" alt="logo-vikings" />
    </div>

    <div className='links-principal'>
    <a href="/adm-landing" className='animacao'>HOME</a>
    <a href="" className='animacao'>RELATÓRIOS</a>
    <a href="/adm-solicitacoes" className='animacao'>SEÇÕES</a>
    <a href="/adm-agendamento" className='animacao'>AGENDAMENTO</a>
    </div>

        </header>

        <hr />

        <div className="principal">

      <input type="text"  className="relatorio" value="relatório 01 - 21/05/2024"/>

    
    </div>
    </div>
  );
}

