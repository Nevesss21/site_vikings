import "./index.scss";
import NavAdm from "../../../components/Nav-adm";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";


export default function AdmRealizados() {

  const [verData, setVerData] = useState([]);

  const location = useLocation()
  let info = location.state

  async function deletarData(id) {
    const url = `http://localhost:5021/apagar-data/${id}`;
    let resp = await axios.delete(url);
    alert("Deletado!" + resp.data)
    await buscar()
    
  }


  async function buscar() {
    const url = `http://localhost:5021/relatorio-data/`;
    let resp = await axios.get(url);
    setVerData(resp.data); 
  }
  useEffect(() => {
    buscar()
  }, [])

  return (
    <div className="relatorio-realizado">
      <NavAdm/>
      <div className="bloco">

        <div className="area-cinza">
          <h1>RELATÓRIOS JA REALIZADOS</h1>

          <div className="scroll">

          {verData.map(item=>
            <div className="bloco-escuro">
          <Link state={{ id: item.id }}  to='/adm-relatorio-realizado'>
              <h3>{`Relatorio ${new Date(item.data).toLocaleDateString()}` }</h3>
          </Link>
              <div className="coluna">
                <img onClick={() => deletarData(item.id)}src="/assets/images/lixeirabranca.png" alt="apagar" />
              </div>
            </div>
          )}
          </div>

        </div>
        <Link to ='/adm-cadastrar-relatorio'><button>REALIZAR NOVO RELATO</button></Link>
      </div>
    </div>
 
  );
}

