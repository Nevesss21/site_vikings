import "./index.scss";
import { Link } from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react"



export default function AdmRelatorio() {


  const [relato, setRelato] = useState([]);
  const [id, setId] = useState(0);
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


    setId(resp.data.id)
    setPessoas(resp.data.total_pessoas)
    setRenda(resp.data.renda_final)
    setMasculino(resp.data.quantidade_masculino)
    setFeminino(resp.data.quantidade_feminino)
    setOutro(resp.data.quantidade_outro)
    setMaior(resp.data.idade_igual_18)
    setMenor(resp.data.idade_18)
  }

  async function inserirRelato() {
    const valores = {
      "pessoas": pessoas,
      "renda": renda,
      "masculino": masculino,
      "feminino": feminino,
      "outro": outro,
      "maior": maior,
      "menor": menor
    }

    try {
      const url = `http://localhost:5021/relatorio/`
      let resp = await axios.post(url, valores)
      alert("relatorio guardado com sucesso!" + resp.data.novoId)

    }
    catch (error) {
      alert("Erro")
    }
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

        <div className="botao">
          <button>Concluido</button>
          <Link state={{ id: id }} to='/adm-realizados'>
            <button onClick={inserirRelato}>GUARDAR RELATO</button>
          </Link>
        </div>

      </div>

    </div>
  )

}