import "./index.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function InformacoesSoliciacao() {

  const location = useLocation()
  let data = location.state


  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const [genero, setGenero] = useState("")
  const [idade, setIdade] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")
  const [ideia, setIdeia] = useState("")

  async function buscarInfoCliente() {
    const url = `http://localhost:5021/cliente/${data.id}`
    let resp = await axios.get(url)

    setNome(resp.data.nome)
    setCpf(resp.data.cpf)
    setGenero(resp.data.genero)
    setIdade(resp.data.idade)
    setTelefone(resp.data.telefone)
    setEmail(resp.data.email)
    setIdeia(resp.data.ideia)
  }

  useEffect(() => {
    buscarInfoCliente()
  }, [])

  return (
    <div className="informacao">

      <header>
        <div className='imagem-logo'>
          <img src="/assets/images/logo-vikings.webp" alt="logo-vikings" />
        </div>

        <Link to='/adm-solicitacoes'><button>VOLTAR</button></Link>
      </header>

      <div className="secao">

        <div className="secao-informacao">
          <h1>INFORMAÇÕES DA SOLICITAÇÃO </h1>

          <div className="info">
            <h3>NOME DO CLIENTE</h3>
            <div><h3>{nome}</h3></div>
          </div>

          <div className="direcao-lado">
            <div className="info-2">
              <h3>IDADE</h3>
              <div><h3>{idade}</h3></div>
            </div>
            <div className="info-2">
              <h3>CPF DO CLIENTE</h3>
              <div><h3>{cpf}</h3></div>
            </div>
          </div>

          <div className="direcao-lado">
            <div className="info-2">
              <h3>GÊNERO</h3>
              <div><h3>{genero}</h3></div>
            </div>
            <div className="info-2">
              <h3>IDEIA</h3>
              <div><h3>{ideia}</h3></div>
            </div>
          </div>

          <div className="info">
            <h3>E-MAIL</h3>
            <div><h3>{email}</h3></div>
          </div>
          <div className="info">
            <h3>TELEFONE</h3>
            <div><h3>{telefone}</h3></div>
          </div>
          <Link state={{ id: data.id }} to='/adm-marcar'><button>MARCAR CONSULTA</button></Link>
        </div>
      </div>
    </div>
  );
}
