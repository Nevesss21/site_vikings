import "./index.scss"
import { Link, useNavigate } from "react-router-dom"
import NavAdm from "../../../components/Nav-adm"
import axios from "axios"
import { useState, useEffect } from "react"

export default function AdmSecoes() {
  const [secao, setSecao] = useState([]);
  const [idDelete, setIdDelete] = useState("");

  const [token, setToken] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    let token = localStorage.getItem('USUARIO')
    setToken(token)

    if (token == null) {
      navigate("/")
    }
  }, [])

  async function buscar() {
    const url = `http://4.172.207.208:5021/secao/`;
    let resp = await axios.get(url);
    setSecao(resp.data);

  }

  async function deletar() {
    const url = `http://4.172.207.208:5021/secao/${idDelete}?x-access-token=${token}`;
    let resp = await axios.get(url);
    setIdDelete("");
    alert("Deletado!" + resp.data)
  }


  useEffect(() => {
    buscar()
  }, [])

  return (
    <div className="sessao">
      <NavAdm />
      <div className="bloco">
        <div className="area-cinza">
          <h1>SESSÕES MARCADAS</h1>

          <div className="scroll">
            {secao.map(item =>
              <Link state={{ id: item.id }} to='/adm-infocliente'>
                <div className="bloco-escuro">
                  <div className='coluna'>
                    <h1>{item.nome}</h1>
                    <h3>{item.cpf}</h3>
                  </div>

                  <div className='flex'>
                    <div className='coluna'>
                      <h3>{new Date(item.data_consulta).toLocaleDateString()}</h3>
                      <h3>{item.hora}</h3>
                    </div>

                    <div className="coluna">
                      <img onClick={deletar} src="/assets/images/lixeirabranca.png" alt="apagar" />
                    </div>
                  </div>
                </div>
              </Link>

            )}
          </div>

        </div>
        <Link to='/adm-solicitacoes'><button>IR PARA SOLICITAÇÕES</button></Link>
      </div>
    </div>

  )
}