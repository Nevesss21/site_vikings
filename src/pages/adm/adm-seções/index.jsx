import "./index.scss"

import NavAdm from "../../../components/Nav-adm"






export default function AdmSecoes() {

    return (
<div className="conteiner-secoes">
       <NavAdm/>

      <div className="principal1">

        <input type="text" placeholder="Pesquise pelo nome da seção..."  />


        <h1>Sessões Marcadas</h1>

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
                alt="as"/>
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

        

       
       

                    
                </div>
            </div>

      





     )
}