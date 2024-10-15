import './index.scss'
import './fonts.scss'
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Whats from '../../../components/Whats';


export default function Contato() {
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
                        <input type="text" placeholder='Digite seu nome...' />
                    </div>
                    <div className="porInput">
                        <h2>EMAIL</h2>
                        <input type="email" placeholder='Informe o seu e-mail ' />

                    </div>
                    <div className="porInput">
                        <h2>TELEFONE</h2>
                        <input type="tel" placeholder='(00)00000-0000' />
                    </div>
                    <div className="porInput">
                        <h2>ASSUNTO</h2>
                        <select name="selecao" id="selecao">
                            <option>Selecione...</option>
                            <option value="opção1">opção1</option>
                            <option value="opção2">opção2</option>
                            <option value="opção3">opção3</option>
                        </select>
                    </div>
                    <div className="porInput">
                        <h2>MENSAGEM</h2>
                        <input type="text" placeholder='Para orçamentos entrar em contato via whatsapp ou via direct no instaragram...' />
                    </div>
                </div>
                <button>Enviar</button>
            </div>

            <div className="sessaoMapa">
                <p>PARA ORÇAMENTOS ENTRAR EM CONTATO PELO WHATSAPP OU VIA DIRECT NO INSTAGRAM.</p>

                <div className="alinhar">
                    <img src="/assets/images/pointerMapa.png" alt="pointer" />
                    <p>ONDE ESTAMOS</p>
                </div>
                <div className="mapbox">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3367511421234!2d-46.56535788817008!3d-23.556346061321427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e849b9ec4e1%3A0xc7fff19a9a4c92fa!2sR.%20Prof.%20Jo%C3%A3o%20de%20Oliveira%20Torres%2C%20405%20-%20Jardim%20Analia%20Franco%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003337-010!5e0!3m2!1spt-BR!2sbr!4v1728877414529!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <Rodape />
        </div>
    );
}