import "./index.scss";
import { Link, useLocation } from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react"


export default function AdmRelatorioRealizado() {
  const location = useLocation()
  let info = location.state

  const [relatoid, setrelatoId] = useState([])

  async function buscar() {
    const url = `http://4.172.207.208:5021/relatorio-id/${info.id}`;
    let resp = await axios.get(url);
    setrelatoId(resp.data);
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
        {relatoid.map(item =>
      
      <div className="bloco">
            <div className="espaco"><h3>{new Date(item.data).toLocaleDateString()}</h3></div>

            <div className="area-cinza">
              <div className="text">
                <p>{`Total de pessoas no mes: ${item.total_pessoas}`}</p>
                <p >{`Renda final : ${item.renda}`}</p>
                <p >{`Clientes do gênero masculino: ${item.masculino}`}</p>
                <p >{`Clientes do gênero feminino: ${item.feminino}`}</p>
                <p >{`Clientes do gênero outro: ${item.outro}`}</p>
                <p >{`Clientes com idade superior igual  a 18 anos: ${item.maior}`}</p>
                <p >{`Clientes com idade menor que 18 anos: ${item.menor}`}</p>
              </div>
            </div>
         
      </div>
        )}




    </div>
  )

}