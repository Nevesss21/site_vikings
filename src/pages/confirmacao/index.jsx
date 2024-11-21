import "./index.scss";
import { Link,useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";


export default function Confirmacao() {
    
    const navigate = useNavigate()    
    const [id, setId] = useState('')


    async function marcar() {
        
        const url = `http://4.172.207.208:5021/marcar/${id}`
        try {
            let finalizar = await axios.put(url)
            toast.success("Sessão confirmada com sucesso!")
            navigate("/")

        } catch (error) {
            toast.error("Verifique o seu número.")  
        }
    }

    return (
        <div className="confirmar">
            <div className="centro">
                <img src="/assets/images/logo-vikings.webp" alt="logoVikings" />
                <h1>SUA SESSÃO FOI MARCADA CONFIRME SUA PRESENÇA</h1>
                <p>Caso não possa confirmar, clique em sair</p>
                <input value={id} type="text" placeholder="digite seu numero" onChange={e => setId(e.target.value)} />
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
