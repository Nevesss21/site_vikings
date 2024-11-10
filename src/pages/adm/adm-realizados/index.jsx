import "./index.scss";
import NavAdm from "../../../components/Nav-adm";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";


export default function AdmRealizados() {

  const [verData, setVerData] = useState([]);
  const [id, setId] = useState(0);
  const location = useLocation()
  let info = location.state


  async function buscar() {
    const url = `http://localhost:5021/relatorio-data/${info.id}`;
    let resp = await axios.get(url);
    setVerData(resp.data.data);
    setId(resp.data.id)

    console.log(resp.data.id)
  }
  useEffect(() => {
    buscar()
  }, [])

  return (
    <div className="relatorio-realizado">
      <NavAdm/>
      <div className="bloco">

     <input type="text" placeholder="Pesquise e veja o seu relatório pela data ou nome.." />

        <div className="area-cinza">
          <h1>RELATÓRIOS JA REALIZADOS</h1>
            <div className="bloco-escuro">
          <Link state={{ id: id }}  to='/adm-relatorio-realizado'>
              <h3>{`Relatorio`+ new Date(verData).toLocaleDateString()}</h3>
          </Link>
              <div className="coluna">
                <img src="/assets/images/lixeirabranca.png" alt="apagar" />
                <img src="/assets/images/canetabranca.png" alt="editar" />
              </div>
            </div>

       
        </div>
        <Link to ='/adm-cadastrar-relatorio'><button>REALIZAR NOVO RELATO</button></Link>
      </div>
    </div>
 
  );
}

