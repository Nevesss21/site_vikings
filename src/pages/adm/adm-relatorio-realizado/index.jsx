import "./index.scss";
import { Link } from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react"


export default function AdmRelatorioRealizado() {

  const [relato, setRelato] = useState([]);
  const [pessoas, setPessoas] = useState(0);
  const [renda, setRenda] = useState(0);
  const [masculino, setMasculino] = useState(0);
  const [feminino, setFeminino] = useState(0);
  const [outro, setOutro] = useState(0);
  const [maior, setMaior] = useState(0);
  const [menor, setMenor] = useState(0);


  async function buscar() {
    const url = `http://localhost:5021/relatorio/`;
    let resp = await axios.get(url);
    setRelato(resp.data);

    setPessoas(resp.data.total_pessoas)
    setRenda(resp.data.renda_final)
    setMasculino(resp.data.quantidade_masculino)
    setFeminino(resp.data.quantidade_feminino)
    setOutro(resp.data.quantidade_outro)
    setMaior(resp.data.idade_igual_18)
    setMenor(resp.data.idade_18)
  }

  useEffect(() => {
    buscar()
  }, [])

  return (
    <div className="relatorio">
      <header>
        <img src="/assets/images/logo-vikings.webp" alt="logo-vikings" />

        <div className="links">
          <Link to='/adm-landing'>HOME</Link>
          <Link to='/adm-realizados'>VOLTAR</Link>
        </div>
      </header>
      <div className="bloco">

        <div className="espaco"><h3>Relatório01-21/05/2024</h3></div>
        <div className="area-cinza">
          <div className="text">
            <p>{`Total de pessoas no mes: ${pessoas}`}</p>
            <p >{`Renda final : ${renda}`}</p>
            <p >{`Clientes do gênero masculino: ${masculino}`}</p>
            <p >{`Clientes do gênero feminino: ${feminino}`}</p>
            <p >{`Clientes do gênero outro: ${outro}`}</p>
            <p >{`Clientes com idade superior igual  a 18 anos: ${maior}`}</p>
            <p >{`Clientes com idade menor que 18 anos: ${menor}`}</p>
          </div>

        </div>
      
      </div>

    </div>
  )

}