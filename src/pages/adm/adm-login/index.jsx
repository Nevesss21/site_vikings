import "./index.scss";
import "./fonts.scss";


 export  default function AdmLogin() {
    return(
        <div className="conteiner-login">

            <div className="caixa">

                <div className="parte1">
                    
                <img src="/assets/images/logo-vikings.png" alt="logo" />

                <h1>Seja Bem-Vindo</h1>
                <hr className="primeira"/>

                </div>
                <div className="parte2">
                    <h2>Informe seu e-mail ou CPF</h2>
                <input type="text" placeholder="Digite" />

                <h2>Informe sua senha</h2>
                <input type="text" placeholder="Digite" />

                </div>

                <div className="parte3">

                    <button className="esqueci">Esqueci Minha Senha</button>
                    <button className="entrar">Entrar</button>

                </div>
                
            </div>
        </div>
    )
}