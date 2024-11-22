import "./index.scss";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { withMask } from "use-mask-input";
import toast from "react-hot-toast";

export default function AdmLogin() {

    async function sair() {
        localStorage.setItem('USUARIO', null)
        navigate('/')
    }

    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    async function entrar() {

        const usuario = {
            "cpf": cpf.replace("-", ""),
            "senha": senha
        }

        if (cpf == "") {
            toast.error("CPF incompleto ou vazio.")
            return
        }
        if (senha == "") {
            toast.error("Insira a senha.")
            return
        }

        const url = `http://4.172.207.208:5021/entrar/`
        let resp = await axios.post(url, usuario)

        if (resp.data.erro !== undefined) {
            toast.error(resp.data.erro)
        } else {
            toast.success("Você acessou a administração.")
            localStorage.setItem('USUARIO', resp.data.token)
            navigate('/adm-landing')
        }
    }


    return (
        <div className="login">
            <div className="secao-inicial">
                <button id="a" onClick={sair}><img src="/assets/images/seta-esquerda.png" alt="seta-esquerda" /></button>
                <div className="coluna">
                    <div className="image">
                        <img src="/assets/images/logo-vikings.webp" alt="logo-vikings" />
                        <h1>Seja Bem Vindo!</h1>
                    </div>
                    <div className="inputs">
                        <p>Informe seu CPF</p>
                        <input id="cpf" type="text" placeholder="000000000-00" ref={withMask('999999999-99')} value={cpf} onChange={(e) => setCpf(e.target.value)} />
                        <p>Informe sua senha</p>
                        <input id="senha" placeholder="senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        <button onClick={entrar}>Entrar</button>
                    </div>

                </div>
            </div>
        </div>
    )
}