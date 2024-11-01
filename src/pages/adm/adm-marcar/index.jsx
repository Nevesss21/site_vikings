import "./index.scss";
import { Link } from "react-router-dom";
import NavAdm from "../../../components/Nav-adm";

export default function AdmMarcar() {
  return (
    <div className="adm-marcar">


      <NavAdm/>

      <div className="secao-dois">

              <div className="bloco">

                <h1>Marcar Consulta</h1>

                <div className="input-1">
                        <div className="espaco">
                            <p>Nome do Paciente</p>
                            <input className="in"  type="text" placeholder="Ex:Lucas" />

                            <p>Gênero</p>
                            <input className="in"  placeholder="Ex:Boyceta" />

                            <p>Telefone</p>
                            <input type="text" className="in" placeholder="Ex: (99) 99999-9999"/>

                            <p>Preço</p>
                            <input type="text"  className="in"  placeholder="Ex: R$ 100,00"/>
                        
                        
                          </div>

                        <div className="espaco">
                          <p>Idade </p>
                          <input className="in" type="text" placeholder="Ex: 30" />

                          <p>E-mail</p>
                          <input type="text" className="in" placeholder="Ex: 9KwXs@example.com"/>

                          <p>Ideia de tatuagem</p>
                          <input className="in" type="text"  placeholder="Ex: Tigre"/>

                          <p>CPF</p>
                          <input className="in"type="text"  placeholder="Ex: 999.999.999-99"/>
                        </div>
              </div>
                


                <div className="botao">
                 <a href="/adm-seções"> <button >Concluir</button></a>
                </div>

     
            </div>
               
          </div>
        </div>

      
   
  );
}
