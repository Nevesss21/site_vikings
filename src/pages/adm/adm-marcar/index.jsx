import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AdmMarcar() {

  const navigate = useNavigate()
  const location = useLocation()
  let info = location.state

  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const [genero, setGenero] = useState("")
  const [idade, setIdade] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")
  const [ideia, setIdeia] = useState("")

  const [valor, setValor] = useState("")
  const [data, setData] = useState("")
  const [horario, setHorario] = useState("")

  async function buscarInfoCliente() {
    const url = `http://localhost:5021/cliente/${info.id}`
    let resp = await axios.get(url)

    setNome(resp.data.nome)
    setCpf(resp.data.cpf)
    setGenero(resp.data.genero)
    setIdade(resp.data.idade)
    setTelefone(resp.data.telefone)
    setEmail(resp.data.email)
    setIdeia(resp.data.ideia)
  }

  async function marcarSessao() {
    const valores = {
      "data": data,
      "hora": horario,
      "preco": valor,
      "id": info.id
    }

    try {
      const url = `http://localhost:5021/marcar/`
      let resp = await axios.post(url, valores)

      alert("Sessão marcada com sucesso!" + resp.data.novoId)

      const ids = {
        "idConsulta": resp.data.novoId,
        "idCliente": info.id
      }
      const segundaUrl = `http://localhost:5021/secao/`
      let resposta = await axios.post(segundaUrl, ids)

      setData("")
      setHorario("")
      setValor("")
      navigate("/adm-secoes")
    }
    catch (error) {
      alert("Erro")
    }
  }

  useEffect(() => {
    buscarInfoCliente()
  }, [])


  return (
    <div className="adm-marcar">

      <header>
        <div className='imagem-logo'>
          <img src="/assets/images/logo-vikings.webp" alt="logo-vikings" />
        </div>

        <div className='links-principal'>
          <Link to='/adm-solicitacoes' className='animacao'>VOLTAR</Link>
          <Link to='/adm-landing' className='animacao'>HOME</Link>
          <Link to='/adm-secoes' className='animacao'>ARQUIVADAS</Link>
        </div>
      </header>

      <div className="secao">

        <div className="secao-inserir">
          <h1>MARCAR CONSULTA </h1>

          <div className="input">
            <h3>NOME DO CLIENTE</h3>
            <input value={nome} type="text" placeholder="EX: JOAO DA SILVA" />
          </div>

          <div className="direcao-lado">
            <div className="input-2">
              <h3>IDADE</h3>
              <input value={idade} type="number" placeholder="EX: 18" />
            </div>
            <div className="input-2">
              <h3>CPF DO CLIENTE</h3>
              <input value={cpf} type="text" placeholder="EX: 000.000.000-00" />
            </div>
          </div>

          <div className="direcao-lado">
            <div className="input-2">
              <h3>HORARIO DA SESSÃO</h3>
              <input value={horario} type="time" placeholder="EX: 10H00" onChange={e => setHorario(e.target.value)} />
            </div>
            <div className="input-2">
              <h3>DATA DA SESSÃO</h3>
              <input value={data} type="date" placeholder="EX: DD/MM/AA" onChange={e => setData(e.target.value)} />
            </div>
          </div>
          <div className="direcao-lado">
            <div className="input-2">
              <h3>GÊNERO</h3>
              <input value={genero} type="text" placeholder="EX: MASCULINO" />
            </div>
            <div className="input-2">
              <h3>IDEIA</h3>
              <input value={ideia} type="text" placeholder="EX: LOBO NAS COSTAS" />
            </div>
          </div>

          <div className="input">
            <h3>E-MAIL</h3>
            <input value={email} type="email" placeholder="EX: SEUEMAIL@GMAIL.COM" />
          </div>
          <div className="input">
            <h3>TELEFONE</h3>
            <input value={telefone} type="text" placeholder="EX: (00) 00000-0000" />
          </div>

          <div className="direcao-lado">
            <div className="input-2">
              <h3>PREÇO BASE</h3>
              <input value={valor} type="text" placeholder=" R$ 00,00" onChange={e => setValor(e.target.value)} />
            </div>
            <button onClick={marcarSessao}>CONCLUIDO</button>
          </div>
        </div>
      </div>
    </div>
  );
}
