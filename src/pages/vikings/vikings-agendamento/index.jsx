import "./index.scss";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Whats from '../../../components/Whats'

export default function Agendamento(){
    return(
        <div className="agendar">
            <Nav/>
            <Whats/>

            <div className="secao-inicial">
                <h1>FAÇA O AGENDAMENTO DA SUA SEÇÃO, PELO SITE OU PELO WHATSAPP</h1>
            </div>
            <div className="secao-dois">

                <div className="bloco">

                <h1>INSIRA SEUS DADOS <br />PARA O AGENDAMENTO DA SEÇÃO</h1>

                <div className="input-1">
                    <div className="espaco">
                        <p>INFORME SEU NOME</p>
                        <input className="in"  type="text" />
                    </div>
                    <div className="espaco">
                        <p>INFORME SEU GÊNERO </p>
                        <input className="in" type="text" />
                    </div>
                </div>

                <div className="input-2">
                    <p>E-MAIL</p>
                    <input type="text" />
                </div>

                <div className="input-1">
                    <div className="espaco">
                        <p>IDADE</p>
                        <input className="in" type="text" />
                    </div>
                    <div className="espaco">
                        <p>CPF</p>
                        <input className="in"type="text" />
                    </div>
                </div>

                <div className="input-2">
                    <p>TELEFONE</p>
                    <input type="text" />
                </div>
                
                <div className="input-1">
                    <div className="espaco">
                        <p>IDEIA DE TATUAGEM</p>
                        <input className="in" type="text" />
                    </div>
                    <div className="espaco">
                        <p>HORARIO E DATA DE INTERESSE</p>
                        <input className="in" type="text" />
                    </div>
                </div>
                <div className="enviar">
                    <button>ENVIAR</button>
                </div>
                </div>

            </div>
            <Rodape/>
            
        </div>
    )
}