

import './index.scss'
import './fonts.scss'



export default function Cabecalho(){
    return( 
    <main>
        <header>
          <div className="imagem-logo">
            <img src="/public/assets/images/logo-vikings.png" alt="logo-vikings" />
            
          </div>

          <div className="links-principal">
            <a href="/">Home</a>
            <a href="../adm-marcar">Marcar</a>
            <a href="/">Arquivadas</a>
          </div>
        </header>
      </main>
      );
}

export  function Bloco(){
    return(
    <div className="bloquinhos-pretos">

        <div className="bloco">
          <div className="parte1">
            <h3 className="principais">Lucas do Rosário</h3>
            <p>CPF:582.365.258-56</p>
          </div>

          <div className="parte2">
            <div className="linha1">
              <p>Data: 17/08/1994</p>
              <img
                className="icones"
                src="/assets/images/canetabranca.png"
                alt="as"
              />
            </div>

            <div className="linha2">
              <p>Horário: 17:27 </p>
              <img
                className="icones"
                src="/assets/images/lixeirabranca.png"
                alt=""
              />
            </div>
          </div>
        </div>
        </div>
        );
}