import { useState, useEffect } from 'react';
import NavAdm from '../../../components/Nav-adm'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.scss';


export default function AdmSolicitacoes() {
  const [solicitar, setSolicitar] = useState([]);

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
    const url = `http://4.172.207.208:5021/cliente/?x-access-token=${token}`;
    let resp = await axios.get(url);
    setSolicitar(resp.data);
  }
  useEffect(() => {
    buscar()
  }, [])



  return (
    <div className="solicitacao">
      <NavAdm />
      <div className="bloco">

        <div className="area-cinza">
          <h1>SOLICITAÇÕES</h1>

          <div className="scroll">
            {solicitar.map(item =>
              <Link state={{ id: item.id }} to='/adm-informacao-solicitacao'>
                <div className="bloco-escuro" >
                  <div className='coluna' >
                    <h1>{item.nome}</h1>
                    <h3>{item.cpf}</h3>
                  </div>
                </div>
              </Link>
            )}
          </div>


        </div>
        <div className='botoes'>

          <Link to='/adm-secoes'><button>VER SESSÕES MARCADAS</button></Link>

        </div>
      </div>
    </div>

  );
}
