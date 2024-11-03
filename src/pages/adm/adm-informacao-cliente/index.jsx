import "./index.scss";
import { Link } from "react-router-dom";

export default function InformacoesSoliciacao() {
  return (

    <div className="informacao">
             
            <header>
                <div className='imagem-logo'>
                    <img src="/assets/images/logo-vikings.webp" alt="logo-vikings" />
                </div>

               <Link to='/adm-solicitacoes'><button>VOLTAR</button></Link>
            </header>

            <div className="secao">

              <div className="secao-informacao">
                  <h1>INFORMAÇÕES DA SOLICITAÇÃO </h1>

                  <div className="info">
                    <h3>NOME DO CLIENTE</h3>
                    <div><h3>ABNER JOSE DOS SANTOS</h3></div>
                  </div>

                  <div className="direcao-lado">
                    <div className="info-2">
                      <h3>IDADE</h3>
                      <div><h3>18</h3></div>
                    </div>
                    <div className="info-2">
                      <h3>CPF DO CLIENTE</h3>
                      <div><h3>600.761.488-31</h3></div>
                    </div>
                  </div>

                  <div className="direcao-lado">
                    <div className="info-2">
                      <h3>HORARIO DA SESSÃO</h3>
                      <div><h3>10h00</h3></div>
                    </div>
                    <div className="info-2">
                      <h3>DATA DA SESSÃO</h3>
                      <div><h3>22/12/2024</h3></div>
                    </div>
                  </div>
                  <div className="direcao-lado">
                    <div className="info-2">
                      <h3>GÊNERO</h3>
                      <div><h3>MASCULINO</h3></div>
                    </div>
                    <div className="info-2">
                      <h3>IDEIA</h3>
                      <div><h3>Lobo nas costas</h3></div>
                    </div>
                  </div>

                  <div className="info">
                    <h3>E-MAIL</h3>
                    <div><h3>abnerjose@gmail.com</h3></div>
                  </div>
                  <div className="info">
                    <h3>TELEFONE</h3>
                    <div><h3>11950234647</h3></div>
                  </div>
                 <Link to='/adm-marcar'><button>MARCAR CONSULTA</button></Link>
              </div>
            </div>
    </div>
  );
}
