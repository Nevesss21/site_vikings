import "./index.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Teste from "../../../components/teste";
import TesteDois from "../../../components/teste-2";
import TesteTres from "../../../components/teste-3";

export default function AdmRelatorioRealizado() {
  const location = useLocation();
  let info = location.state;
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem('USUARIO');
    setToken(token);

    if (token == null) {
      navigate("/");
    }
  }, []);

  const [relatoid, setrelatoId] = useState([]);
  const [relatoIdade, setRelatoIdade] = useState([]);
  const [relatoRenda, setRelatoRenda] = useState([]);
  const [relatoGenero, setRelatoGenero] = useState([]);


  async function buscar() {

    const url = `http://localhost:5021/relatorio-id/${info.id}?x-access-token=${token}`;
    const segundaUrl = `http://localhost:5021/relatorio-idade/`;
    const terceiraUrl = `http://localhost:5021/relatorio-renda/`;
    const quartaUrl = `http://localhost:5021/relatorio-genero/`;
    try {

      let resp = await axios.get(url);
      let resposta = await axios.get(segundaUrl);
      let respostaRenda = await axios.get(terceiraUrl);
      let respostaGenero = await axios.get(quartaUrl);

      setrelatoId(resp.data);
      setRelatoIdade(resposta.data);
      setRelatoRenda(respostaRenda.data);
      setRelatoGenero(respostaGenero.data);

      // Transformar os dados para o gráfico
      relatoIdade = resp.data.map(item => ({
        id: item.id,
        name: new Date(item.data).toLocaleDateString(),
        total_pessoas: item.total_pessoas,
        maior: item.maior,
        menor: item.menor,
      }));
      setRelatoIdade(relatoIdade);

      relatoRenda = resp.data.map(item => ({
        id: item.id,
        name: new Date(item.data).toLocaleDateString(),
        renda: item.renda,
      }));
      setRelatoRenda(relatoRenda);

      relatoGenero = resp.data.map(item => ({
        id: item.id,
        name: new Date(item.data).toLocaleDateString(),
        total_pessoas: item.total_pessoas,
        masculino: item.masculino,
        feminino: item.feminino,
        outro: item.outro
      }));
      setRelatoGenero(relatoGenero);

    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }


  useEffect(() => {
    buscar();
  }, []);

  return (
    <div className="relatorio">
      <header>
        <img src="/assets/images/logo-vikings.webp" alt="logo-vikings" />

        <div className="links">
          <Link to='/adm-landing'>HOME</Link>
          <Link to='/adm-realizados'>VOLTAR</Link>
        </div>
      </header>

      {relatoid.map(item =>
        <div key={item.id} className="bloco">
          <div className="espaco">
            <h3>{new Date(item.data).toLocaleDateString()}</h3>
          </div>
          <div className="area-cinza">
            <div className="text">
              <p>{`Total de pessoas no mês: ${item.total_pessoas}`}</p>
              <p>{`Renda final: ${item.renda}`}</p>
              <p>{`Clientes do gênero masculino: ${item.masculino}`}</p>
              <p>{`Clientes do gênero feminino: ${item.feminino}`}</p>
              <p>{`Clientes do gênero outro: ${item.outro}`}</p>
              <p>{`Clientes com idade igual ou superior a 18 anos: ${item.maior}`}</p>
              <p>{`Clientes com idade menor que 18 anos: ${item.menor}`}</p>
            </div>
          </div>
        </div>
      )}

      <div className="grafico-container">
        <div>
          <h2>Gráfico de Idade</h2>
          <Teste dados={relatoIdade} />
        </div>
        <div>
          <h2>Gráfico de Renda </h2>
          <TesteDois dados={relatoRenda} />

        </div>
        <div>
          <h2>Gráfico de Genero</h2>
          <TesteTres dados={relatoGenero} />
        </div>

      </div>
    </div>
  );
}
