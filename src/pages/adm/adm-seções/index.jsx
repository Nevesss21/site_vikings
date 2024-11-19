import "./index.scss"
import { Link,  useLocation, useNavigate } from "react-router-dom"
import NavAdm from "../../../components/Nav-adm"
import axios from "axios"
import { useState, useEffect } from "react"

export default function AdmSecoes() {
  const [secao, setSecao] = useState([]);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const location = useLocation()
  let info = location.state

  useEffect(() => {
    let token = localStorage.getItem('USUARIO')
    setToken(token)

    if (token == null) {
      navigate("/")
    }
  }, [])

  async function buscar() {
    const url = `http://localhost:5021/secao/`;
    let resp = await axios.get(url);
    setSecao(resp.data);

  }

  async function deletar(id) {
    const url = `http://localhost:5021/secao/${id}?x-access-token=${token}`;
    let resp = await axios.delete(url);
    alert("Deletado!" + resp.data)
    await buscar()
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
              <div className="bloco-escuro">
                <Link state={{ id: item.id }} to='/adm-infocliente'>
                  <div className='coluna'>
                    <h1>{item.nome}</h1>
                    <h3>{item.cpf}</h3>
                  </div>
                </Link>

                <div className='flex'>
                  <div className='coluna'>
                    <h3>{new Date(item.data_consulta).toLocaleDateString()}</h3>
                    <h3>{item.hora}</h3>
                  </div>

                  <div className="coluna">
                    <img onClick={() => deletar(item.id)}  src="/assets/images/lixeirabranca.png" alt="apagar" />
                  </div>
                </div>
              </div>

            )}
          </div>

        </div>
        <Link to='/adm-solicitacoes'><button>IR PARA SOLICITAÇÕES</button></Link>
      </div>
    </div>

  )
}