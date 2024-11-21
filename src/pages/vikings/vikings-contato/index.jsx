import './index.scss'
import { useState } from 'react'
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Whats from '../../../components/Whats';
import axios from 'axios';
import toast from 'react-hot-toast';
import { withMask } from 'use-mask-input';

export default function Contato() {

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')

    async function enviar() {
        try {

            if (nome.length < 3 || nome.length > 15) {
                toast.error("Verifique o campo nome.")
                return
            }
            if (email.length < 5 || email.length > 50) {
                toast.error("Verifique o campo email.")
                return
            }
            if (telefone === "") {
                toast.error("Informe o número de telefone.")
                return
            }
            if (assunto === "" || assunto === "Selecionar") {
                toast.error("Selecione o Assunto.")
                return
            }
            if (mensagem.length < 5 || mensagem.length > 250) {
                toast.error("Verifique o campo descrição.")
                return
            }

            const usuario = {
                "nome": nome,
                "telefone": telefone.replace("-", "").replace("(", "").replace(")", ""),
                "email": email,
                "assunto": assunto,
                "mensagem": mensagem
            }

            const url = `http://4.172.207.208:5021/contato/`
            let resp = await axios.post(url, usuario)
            toast.success('Pessoa adicionada na tabela contato. Id: ' + resp.data.novoId);
            setNome("")
            setTelefone("")
            setEmail("")
            setAssunto("")
            setMensagem("")
        }
        catch (error) {
            toast.error("Erro ao tentar")
        }
    }

    return (
        <div className="Contato">
            <Nav />
            <Whats />
            <div className="sessaoInicial">
                <h1>FALE CONOSCO</h1>
            </div>

            <div className="sessaoInputs">
                <div className="separacao">
                    <div className="porInput">
                        <h2>NOME</h2>
                        <input type="text" placeholder='Digite seu nome...' value={nome} onChange={e => setNome(e.target.value)} />
                    </div>
                    <div className="porInput">
                        <h2>EMAIL</h2>
                        <input type="email" placeholder='Informe o seu e-mail ' value={email} onChange={e => setEmail(e.target.value)} />

                    </div>
                    <div className="porInput">
                        <h2>TELEFONE</h2>
                        <input type="tel" ref={withMask('(99)99999-9999')} placeholder='(00)00000-0000' value={telefone} onChange={e => setTelefone(e.target.value)} />
                    </div>
                    <div className="porInput">
                        <h2>ASSUNTO</h2>
                        <select name="selecao" id="selecao" value={assunto} onChange={e => setAssunto(e.target.value)}>
                            <option>Selecione...</option>
                            <option value="Tatuagem">Tatuagem</option>
                            <option value="Preços">Precos</option>
                            <option value="Horários">Horarios</option>
                        </select>
                    </div>
                    <div className="porInput">
                        <h2>MENSAGEM</h2>
                        <input type="text" placeholder='Para orçamentos entrar em contato via whatsapp ou via direct no instaragram...' value={mensagem} onChange={e => setMensagem(e.target.value)} />
                    </div>
                </div>
                <button onClick={enviar}>Enviar</button>
            </div>

            <div className="sessaoMapa">
                <p>PARA ORÇAMENTOS ENTRAR EM CONTATO PELO WHATSAPP OU VIA DIRECT NO INSTAGRAM.</p>

                <div className="alinhar">
                    <img src="/assets/images/pointerMapa.png" alt="pointer" />
                    <p>ONDE ESTAMOS</p>
                </div>
                <div className="mapbox">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3367511421234!2d-46.56535788817008!3d-23.556346061321427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e849b9ec4e1%3A0xc7fff19a9a4c92fa!2sR.%20Prof.%20Jo%C3%A3o%20de%20Oliveira%20Torres%2C%20405%20-%20Jardim%20Analia%20Franco%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003337-010!5e0!3m2!1spt-BR!2sbr!4v1728877414529!5m2!1spt-BR!2sbr" title='mapa' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <Rodape />
        </div>
    );
}