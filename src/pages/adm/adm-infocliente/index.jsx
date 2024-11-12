import "./index.scss";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


export default function InformacoesCliente() {
    const location = useLocation() 
    const navigate = useNavigate()

    let data = location.state
    const [informacao, setInformacao] = useState([]);
    const [anotacao, setAnotacao] = useState("")
    const [situacao, setSituacao] = useState(false)

    async function inseriAnotacao() {
        const valores = {
            "anotacao": anotacao,
            "situacao": situacao
        }

        try {
            const url = `http://4.172.207.208/:5021/info-cliente/`
            let resp = await axios.post(url, valores)

            alert("Anotacao feita com sucesso!" + resp.data.novoId)
            setAnotacao("")
            setSituacao("")
            navigate("/adm-solicitacoes")
        }
        catch (error) {
            alert("Erro")
        }
    }

    async function buscar() {
        const url = `http://4.172.207.208/:5021/secao/${data.id}`;
        let resp = await axios.get(url);
        setInformacao(resp.data);
    }
    useEffect(() => {
        buscar()
    }, [])

    return (
        <div className="informacao">
            <header>
                <img src="/assets/images/logo-vikings.webp" alt="logo-vikings" />
                <Link to='/adm-secoes'><button>VOLTAR</button></Link>
            </header>

            <div className="conteiner">
                <div className="secao">
                    {informacao.map(item =>
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
                            </div>
                        </div>
                    )}

                    <div className="anotacao">
                        <h1>ANOTAÇÕES</h1>
                        <textarea value={anotacao} onChange={e => setAnotacao(e.target.value)} name="anotacaoes" id="anotacao"></textarea>

                        <div className="ulti">
                            <div className="selecao">
                                <p>Cliente satisfeito ?</p>
                                <input type="checkbox" checked={situacao} onChange={e => setSituacao(e.target.checked)} />
                            </div>
                            <button onClick={inseriAnotacao}>CONCLUIR</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );

}