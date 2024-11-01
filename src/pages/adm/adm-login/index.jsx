import "./index.scss";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


 export  default function AdmLogin() {

    async function sair() {
        localStorage.setItem('USUARIO', null)
        navigate('/')
    }
    

    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    async function entrar() {
        const usuario = {
            "cpf": cpf,
            "senha": senha
        }

        const url = `http://4.172.207.208:5021/entrar/`
        let resp = await axios.post(url, usuario)

        if (resp.data.erro != undefined) {
            alert(resp.data.erro)
        } else {
            localStorage.setItem('USUARIO', resp.data.token)
            navigate('/adm-landing')
        }
    }


    return(
        <div className="login">
   

            <div className="secao-inicial">
                <header>
                <button  onClick={sair}><img src="/assets/images/seta-esquerda.png" alt="seta-esquerda" /></button>
                </header>


                <div className="coluna">
                    <div className="image">
                        <img src="/assets/images/logo-vikings.webp" alt="logo-vikings" />
                        <h1>Seja Bem Vindo!</h1>
                    </div>
                    <div className="inputs">
                        <p>Informe seu CPF</p>
                        <input id="cpf" type="text" value={cpf}onChange={(e) => setCpf(e.target.value)}/>
                        <p>Informe sua senha</p>
                        <input id="senha" type="text" value={senha}onChange={(e) => setSenha(e.target.value)}/>
                    </div>
                    <div className="botoes">
                        <button onClick={entrar}>Entrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}