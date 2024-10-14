import "./index.scss";
import "./fonts.scss";
import Cabecalho from "../../../components/Cabecalho";
import Bloco from "../../../components/bloco";
export default function AdmAgendamento() {
  return (
    <div className="conteiner-admagendamento">

      <Cabecalho />


      <div className="principal">

        <input className=" filtro" placeholder="Pesqauisar Sessão por CPF ou Nome..."></input>
        <h1>Sessões Marcadas</h1>

        <Bloco />
        <br />

        <Bloco />

        <br />

        <Bloco />

      </div>
    </div>


  );
}
