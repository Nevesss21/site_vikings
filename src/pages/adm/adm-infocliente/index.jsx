import "./index.scss";
import { Link } from "react-router-dom";



export default function informacoesCliente() {
    return(
        <div className="informacao">
            <header>
                <img src="/assets/images/logo-vikings.webp" alt="logo-vikings" />
                <Link to='/adm-secoes'><button>VOLTAR</button></Link>
            </header>

            <div className="conteiner">
            <div className="secao">
                <div className="bloco-escuro">
                <div className='coluna'>
                    <h1>ABNER JOSÉ</h1>
                    <h3>CPF: 600.761.488-31</h3>
                </div>
    
                <div className='coluna'>
                    <h3>Data: 16/05/2024</h3>
                    <h3>Horário: 17:37</h3>
                </div>             
                </div>

                <div className="anotacao">
                    <h1>ANOTAÇÕES</h1>
                    <textarea name="anotacaoes" id="anotacao"></textarea>

                    <button>CONCLUIR</button>
                </div>

            </div>

            </div>

           

        </div>
    )


}