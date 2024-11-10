import { useState } from "react";
import NavAdm from "../../../components/Nav-adm";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function CadastrarRelatorio() {
  const navigate = useNavigate()

  const [criar, setCriar] = useState("")

  async function Criar() {
       
    try {
      const url = `http://localhost:5021/criar/`;
      let resp = await axios.post(url);

      alert("relatorio criado com sucesso com sucesso!" + resp.data.novoId)
      setCriar("")
      navigate("/adm-relatorio")
  }
  catch (error) {
      alert("Erro")
  }
    
}
  
  
 
  return (
    <div className="cadastrar-relatorio">
      <NavAdm />
      <div className="secao-cadastro">
        <div className="cadastrar">
      

          <div className="escolha">
            <h1>Escolha os filtros do seu relatorio</h1>

            <select name="selecao" id="selecao">
              <option>Selecione...</option>
              <option value="Total de pessoas">Total de pessoas</option>
              <option value="Renda Final">Renda Final</option>
              <option value="Clientes do gênero masculino">Clientes do gênero masculino</option>
              <option value="Clientes do gênero feminino">Clientes do gênero feminino</option>
              <option value="Clientes do genero igua a outro">Clientes do genero igua a outro</option>
              <option value="Clientes com idade superior a 30">Clientes com idade superior a 30 anos</option>
              <option value="Clientes com idade superior igual a 18">Clientes com idade superior igual a 18</option>
              <option value="Clientes com idade menor que 18">Clientes com idade menor que 18</option>
              <option value="Todas as opcões">Todas as opcões</option>
            </select>

          </div>

          <div className="botoes">
            <Link to="/adm-realizados">
              <button>Ver Relatórios</button>
            </Link>
            <button onClick={Criar}>Criar novo Relatório</button>
          </div>
        </div>
      </div>
    </div>
  );
}
