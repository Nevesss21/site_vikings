import './index.scss'


export default function Bloco(){
    return(
    <div className="bloquinhos-pretos">

        <div className="bloco1">

          <div className="parte1">
            <p className="principais">Lucas do Rosário</p>
            
            <h3 className="principais">CPF: 504.656.56-96</h3>
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