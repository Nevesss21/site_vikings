import "./index.scss"
import { Link } from "react-router-dom"
import NavAdm from "../../../components/Nav-adm"
import axios from "axios"
import { useState, useEffect } from "react"


export default function AdmSecoes() {
  const [secao, setSecao] = useState([]);

  async function buscar() {
    const url = `http://localhost:5021/secao/`;
    let resp = await axios.get(url);
    setSecao(resp.data);

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
                      <h3>{item.data_consulta}</h3>
                      <h3>{item.hora}</h3>
                    </div>

                    <div className="coluna">
                      <img src="/assets/images/lixeirabranca.png" alt="apagar" />
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