import "./index.scss";
import { Link } from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react"


export default function AdmRelatorio() {

  const [relato, setRelato] = useState([]);
  const [pessoas, setPessoas] = useState();
  const [renda, setRenda] = useState();
  const [masculino, setMasculino] = useState();
  const [feminino, setFeminino] = useState();
  const [outro, setOutro] = useState();
  const [maior, setMaior] = useState();
  const [menor, setMenor] = useState();


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
    
    console.log(valores)

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
          {relato.map(item =>
            <div className="text">
              <p value={pessoas} onChange={e => setPessoas(e.target.value)}>{item.total_pessoas}</p>
              <p value={renda} onChange={e => setRenda(e.target.value)}>{item.renda_final}</p>
              <p value={masculino} onChange={e => setMasculino(e.target.value)}>{item.quantidade_masculino}</p>
              <p value={feminino} onChange={e => setFeminino(e.target.value)}>{item.quantidade_feminino}</p>
              <p value={outro} onChange={e => setOutro(e.target.value)}>{item.quantidade_outro}</p>
              <p value={maior} onChange={e => setMaior(e.target.value)}>{item.idade_igual_18}</p>
              <p value={menor} onChange={e => setMenor(e.target.value)}>{item.idade_18}</p>
            </div>
          )}
        </div>
        <div className="botao">
          <button>Concluido</button>
          <button onClick={inserirRelato}>GUARDAR RELATO</button>
        </div>
      </div>

    </div>
  )

}