import { useState } from "react";
import NavAdm from "../../../components/Nav-adm";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function CadastrarRelatorio() {
  const[data, setDate]= useState("")
  const[fkCliente, setFkCliente]= useState("")
  const[fkConsulta, setFkConsulta]= useState("")
  const[fkSecao, setFkSecao]= useState("")


  const navigate = useNavigate()

  async function inserirRelato() {
    const pararm = {
      "data":data,
      "fkCliente":fkCliente,
      "fkConsulta":fkConsulta,
      "fkSecao":fkSecao

    }
    try {
      const url = `http://localhost:5021/relatorio/`
      let resp = await axios.post(url, pararm)
  
      alert("Sessão marcada com sucesso!" + resp.data.novoId)
      setDate("")
      setFkCliente("")
      setFkConsulta("")
      setFkSecao("")
      navigate("/adm-realizados")
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
          <div className="espaco">
            <div className="input">
              <h3>Informe a data do relatório</h3>
              <input type="date" value={data} onChange={e => setDate(e.target.value)} />
            </div>
          </div>

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
            <button onClick={inserirRelato}>Criar novo Relatório</button>
          </div>
        </div>
      </div>
    </div>
  );
}
