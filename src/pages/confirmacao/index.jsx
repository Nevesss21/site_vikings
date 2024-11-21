import "./index.scss";
import { Link } from "react-router-dom";

export default function Confirmacao() {
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
                    <button>CONFIRMAR</button> 
                </div>

            </div>
        </div>
    );
}
