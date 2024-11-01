import "./index.scss";
import axios from 'axios'
import { useState } from 'react'
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Whats from '../../../components/Whats'

export default function Agendamento(){
    const [nome, setNome] = useState('')
    const [genero, setGenero] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [ideia, setIdeia] = useState('')
    const [idade, setIdade] = useState('')

    async function enviar() {
        const usuario = {
            "nome": nome,
            "cpf": cpf,
            "genero": genero,
            "idade": idade,
            "telefone": telefone,
            "email": email,
            "ideia": ideia
        }

        const url = `http://4.172.207.208:5021/cliente/`
        let resp = await axios.post(url, usuario)
        alert('Pessoa adicionada na tabela cliente. Id: ' + resp.data.novoId);
    }

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
                        <input className="in"  type="text" value={nome} onChange={e => setNome(e.target.value)}/>
                    </div>
                    <div className="espaco">
                        <p>INFORME SEU GÊNERO </p>
                        <input className="in" type="text" value={genero} onChange={e => setGenero(e.target.value)}/>
                    </div>
                </div>

                <div className="input-2">
                    <p>E-MAIL</p>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className="input-1">
                    <div className="espaco">
                        <p>IDADE</p>
                        <input className="in" type="text"value={idade} onChange={e => setIdade(e.target.value)} />
                    </div>
                    <div className="espaco">
                        <p>CPF</p>
                        <input className="in"type="text"value={cpf} onChange={e => setCpf(e.target.value)} />
                    </div>
                </div>

                <div className="input-2">
                    <p>TELEFONE</p>
                    <input type="text"value={telefone} onChange={e => setTelefone(e.target.value)} />
                </div>
                
                <div className="input-2">
                        <p>IDEIA DE TATUAGEM</p>
                        <input className="in" type="text"value={ideia} onChange={e => setIdeia(e.target.value)} />
                </div>
                <div className="enviar">
                    <button onClick={enviar}>ENVIAR</button>
                </div>
                </div>

            </div>
            <Rodape/>
            
        </div>
    )
}