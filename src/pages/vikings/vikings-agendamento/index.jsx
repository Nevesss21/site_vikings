import "./index.scss";
import axios from 'axios'
import { useState } from 'react'
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Whats from '../../../components/Whats'
import toast from "react-hot-toast";
import { withMask } from 'use-mask-input';


export default function Agendamento() {
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
            "cpf": cpf.replace("-", ""),
            "genero": genero,
            "idade": idade,
            "telefone": telefone.replace("-", "").replace("(", "").replace(")", ""),
            "email": email,
            "ideia": ideia
        }
        const url = `http://4.172.207.208:5021/cliente/`

        try {

            if (nome.length < 3 || nome.length > 15) {
                toast.error("Verifique o campo nome.")
                return
            }
            if (genero == "" || genero == "Selecionar") {
                toast.error("Informe o gênero.")
                return
            }
            if (email.length < 5 || email.length > 50) {
                toast.error("Verifique o campo email.")
                return
            }
            if (telefone == "") {
                toast.error("Informe o número de telefone.")
                return
            }
            if (cpf == "") {
                toast.error("Informe o CPF.")
                return
            }
            if (idade > 122) {
                toast.error("Você não é tão velho, é?.")
                return
            }
            if (idade < 16) {
                toast.error("Sua idade não corresponde a idade mínima.")
                return
            }
            if (ideia.length < 5 || ideia.length > 250) {
                toast.error("Verifique o campo descrição.")
                return
            }


            let resp = await axios.post(url, usuario)
            toast.success(`Pessoa adicionada na tabela cliente. Id: ${resp.data.novoId}`);
            setNome("")
            setGenero("")
            setCpf("")
            setTelefone("")
            setEmail("")
            setIdeia("")
            setIdade("")
        }
        catch (error) {
            toast.error("ERRO")
            return
        }
    }

    return (
        <div className="agendar">
            <Nav />
            <Whats />

            <div className="secao-inicial">
                <h1>FAÇA O AGENDAMENTO DA SUA SEÇÃO, PELO SITE OU PELO WHATSAPP</h1>
            </div>
            <div className="secao-dois">

                <div className="bloco">

                    <h1>INSIRA SEUS DADOS <br />PARA O AGENDAMENTO DA SEÇÃO</h1>
                    <div className="input-1">
                        <div className="espaco">
                            <p>INFORME SEU NOME</p>
                            <input className="in" placeholder="Nome" type="text" value={nome} onChange={e => setNome(e.target.value)} />
                        </div>
                        <div className="espaco">
                            <p>INFORME SEU GÊNERO </p>

                            <select name="genero" id="genero" onChange={e => setGenero(e.target.value)}>
                                <option>Selecionar</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outro">Outro</option>
                            </select>
                        </div>
                    </div>

                    <div className="input-2">
                        <p>E-MAIL</p>
                        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="input-1">
                        <div className="espaco">
                            <p>IDADE</p>
                            <input className="in" placeholder="Idade" type="text" value={idade} onChange={e => setIdade(e.target.value)} />
                        </div>
                        <div className="espaco">
                            <p>CPF</p>
                            <input ref={withMask('99999999-99')} className="in" type="text" value={cpf} onChange={e => setCpf(e.target.value)} />
                        </div>
                    </div>

                    <div className="input-2">
                        <p>TELEFONE</p>
                        <input type="text" placeholder="(00)00000-0000" ref={withMask('(99)99999-9999')} value={telefone} onChange={e => setTelefone(e.target.value)} />
                    </div>

                    <div className="input-2">
                        <p>IDEIA DE TATUAGEM</p>
                        <input className="in" placeholder="Descreva entre 5 e 250 carácteres" type="text" value={ideia} onChange={e => setIdeia(e.target.value)} />
                    </div>
                    <div className="enviar">
                        <button onClick={enviar} >ENVIAR</button>
                    </div>
                </div>

            </div>
            <Rodape />

        </div>
    )
}