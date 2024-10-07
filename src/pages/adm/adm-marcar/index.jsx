import "./index.scss";
import "./fonts.scss";

export default function AdmMarcar() {
  return (
    <div className="conteiner-admmarcar">
      <main>
        <header>
          <div className="imagem-logo">
            <img src="/assets/images/logo-vikings.png" alt="logo-vikings" />
          </div>

          <div className="links-principal">
            <a href="../adm-agendamento">Voltar</a>
            <a href="/">Home</a>
            <a href="">Arquivadas</a>
          </div>
        </header>
      </main>

      <div className="principal">
        <h1 className="Marcar">Marcar Consulta</h1>

        <div className="filtro1">
          <h2>Nome do Paciente</h2>
          <input
            className="Nome"
            type="texto"
            placeholder="Digite o nome do Paciente"
          />
        </div>

        <div className="ConjuntoFiltros1">
          <div className="Conjunto1">
            <h2>Idade</h2>
            <input type="text" placeholder="DD/MM/AA" />

            <h2>Horário da Sessão</h2>
            <input type="text" placeholder="00:00" />

            <h2>Gênero</h2>
            <input type="text" placeholder="Ex: Boyceta" />
          </div>

          <div className="Conjunto2">
            <h2>CPF do Paciente</h2>
            <input type="text" placeholder="Ex:123.456.789-98" />

            <h2>Data da Consulta</h2>
            <input type="text" placeholder="DD/MM/AA" />

            <h2>Ideia Apresentada</h2>
            <input type="text" placeholder="Ex: Tigre no Ante-Braço" />
          </div>
        </div>

        <div className="ConjuntoFiltros2">
            <div className="Conjunto3"> 
            <h2> E-mail</h2>
            <input type="text" placeholder="Insira o e-mail do cliente"/>
            
            <h2>Telefone</h2>
            <input type="text" placeholder="00 0000-0000"/>

            </div>

            <div className="Conjunto3">
                <h2>Preço Base</h2>

                <button className="botao">Concluido</button>
            </div>
           
        </div>
      </div>
    </div>
  );
}
