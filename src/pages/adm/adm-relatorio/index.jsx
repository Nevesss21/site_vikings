import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react"
import NavAdm from '../../../components/Nav-adm'



export default function AdmRelatorio() {

  const [token, setToken] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    let token = localStorage.getItem('USUARIO')
    setToken(token)

    if (token == null) {
      navigate("/")
    }
  }, [])


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
    const url = `http://4.172.207.208:5021/relatorio/?x-access-token=${token}`;
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
    console.log(relato)
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
      const url = `http://4.172.207.208:5021/relatorio/`
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
    <div className="relato">
      <NavAdm/>
  
      <div className="bloco">

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
          <Link state={{ id: id }} to='/adm-realizados'>
            <button>REALIZADOS</button>
          </Link>
          <Link state={{ id: id }} to='/adm-realizados'>
            <button onClick={inserirRelato}>GUARDAR RELATO</button>
          </Link>
        </div>

      </div>

    </div>
  )

}