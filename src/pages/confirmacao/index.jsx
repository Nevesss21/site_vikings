import "./index.scss";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";


export default function Confirmacao() {

    const location = useLocation()
    const info = location.state

    async function marcar() {
        const url = `http://4.172.207.208:5021/marcar/${info.id}`
        let finalizar = await axios.put(url)
        toast.success("Consulta marcada com sucesso!")   
    }

    return (
        <div className="confirmar">
            <div className="centro">
                <img src="/assets/images/logo-vikings.webp" alt="logoVikings" />
                <h1>SUA SESSÃO FOI MARCADA CONFIRME SUA PRESENÇA</h1>
                <p>Caso não poder confirmar, clique em sair</p>
                <div>
                    <Link to='/'>
                        <button>SAIR</button>
                    </Link>
                    <button onClick={marcar}>CONFIRMAR</button>
                </div>

            </div>
        </div>
    );
}
