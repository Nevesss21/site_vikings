import './index.scss'
import './fonts.scss'

export default function Bloco(){
    return(
    <div className="bloquinhos-pretos">
        <div className="bloco1">
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