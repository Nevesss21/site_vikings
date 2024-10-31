import "./index.scss";
import { Link } from "react-router-dom";


export default function AdmRelatorio() {
  return(
    <div className="relatorio">
      <header>
        <img src="/assets/images/logo-vikings.webp" alt="logo-vikings" />

        <div className="links">
          <Link to='/adm-landing'>HOME</Link>
         <Link to='/adm-realizados'><button>Voltar</button></Link>
        </div>
      </header>
      <div className="bloco">

        <div className="espaco"><h3>Relatório01-21/05/2024</h3></div>
        <div className="area-cinza">
          <div className="text">
            <p>Total de pessoas no mes: 83</p>
            <p>Renda final : R$ 12.000,00</p>
            <p>Clientes do gênero masculino: 38</p>
            <p>Clientes do gênero feminino : 30</p>
            <p>Clientes do genero igua a outro : 15</p>
            <p>Clientes com idade superior a 30 anos:  20</p>
            <p>Clientes com idade superior igual  a 18 anos:  49</p>
            <p>Clientes com idade menor que 18 anos:  14</p>
            <p>Percentual de crescimento : 30%</p>
          </div>
          <input type="text" placeholder="Observações" />
        </div>
        <button>Concluido</button>
      </div>

    </div>
  )

}
