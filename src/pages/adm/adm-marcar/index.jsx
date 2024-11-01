import "./index.scss";
import { Link } from "react-router-dom";
import NavAdm from "../../../components/Nav-adm";

export default function AdmMarcar() {
  return (
    <div className="adm-marcar">
             
            <header>
                <div className='imagem-logo'>
                    <img src="/assets/images/logo-vikings.webp" alt="logo-vikings" />
                </div>

                <div className='links-principal'>
                    <Link to='/adm-realizados' className='animacao'>VOLTAR</Link>
                    <Link to= '/adm-landing'className='animacao'>HOME</Link>
                    <Link to='/adm-secoes' className='animacao'>ARQUIVADAS</Link>
                </div>
            </header>

            <div className="secao">

              <div className="secao-inserir">
                  <h1>MARCAR CONSULTA </h1>

                  <div className="input">
                    <h3>NOME DO CLIENTE</h3>
                    <input type="text" placeholder="EX: JOAO DA SILVA" />
                  </div>

                  <div className="direcao-lado">
                    <div className="input-2">
                      <h3>IDADE</h3>
                      <input type="number" placeholder="EX: 18"  />
                    </div>
                    <div className="input-2">
                      <h3>CPF DO CLIENTE</h3>
                      <input type="text"placeholder="EX: 000.000.000-00"  />
                    </div>
                  </div>

                  <div className="direcao-lado">
                    <div className="input-2">
                      <h3>HORARIO DA SESSÃO</h3>
                      <input type="text" placeholder="EX: 10H00"  />
                    </div>
                    <div className="input-2">
                      <h3>DATA DA SESSÃO</h3>
                      <input type="text" placeholder="EX: DD/MM/AA" />
                    </div>
                  </div>
                  <div className="direcao-lado">
                    <div className="input-2">
                      <h3>GÊNERO</h3>
                      <input type="text" placeholder="EX: MASCULINO" />
                    </div>
                    <div className="input-2">
                      <h3>IDEIA</h3>
                      <input type="text" placeholder="EX: LOBO NAS COSTAS"  />
                    </div>
                  </div>

                  <div className="input">
                    <h3>E-MAIL</h3>
                    <input type="email"  placeholder="EX: SEUEMAIL@GMAIL.COM" />
                  </div>
                  <div className="input">
                    <h3>TELEFONE</h3>
                    <input type="text" placeholder="EX: (00) 00000-0000"  />
                  </div>

                  <div className="direcao-lado">
                    <div className="input-2">
                      <h3>PREÇO BASE</h3>
                      <input type="text" placeholder=" R$ 00,00"  />
                    </div>
                    <button>CONCLUIDO</button>
                  </div>
              </div>
            </div>
    </div>
  );
}
