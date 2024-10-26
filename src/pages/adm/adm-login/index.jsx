import "./index.scss";


 export  default function AdmLogin() {
    return(
        <div className="login">

            <div className="secao-inicial">
                <div className="image">
                    <img src="/assets/images/logo-vikings.webp" alt="logo-vikings" />
                    <h1>Seja Bem Vindo!</h1>
                </div>
                <div className="inputs">
                    <p>Informe seu E-mail</p>
                    <input type="email"/>
                    <p>Informe sua senha</p>
                    <input type="text" />
                </div>
                <div className="botoes">
                    <button>Entrar</button>
                </div>
            </div>
        </div>
    )
}