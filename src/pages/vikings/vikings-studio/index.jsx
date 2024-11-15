import './index.scss'
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Whats from '../../../components/Whats';


export default function Estudio() {
    return (
        <div className="Estudio">
            <Nav />
            <Whats />
            <div className="sessaoInicial">
                <h1>O ESTÚDIO</h1>
            </div>

            <div className="segundaSessao">
                <h2>O ESTÚDIO DE TATUAGEM LÍDER NO MERCADO, COM RECONHECIMENTO, DIVERSOS PRÊMIOS E UMA EQUIPE DE ARTISTAS EXCEPCIONAIS</h2>
                <div className="text">
                    <div className="column">
                        <h3>ACESSIBILIDADE</h3>
                        <p>Somos pioneiros na adequação dos espaços do estúdio para o portador de mobilidade reduzida. Temos acesso adaptado desde a recepção até uma sala exclusiva de atendimento.</p>
                    </div>
                    <div className="column">
                        <h3>BIOSSEGURANÇA</h3>
                        <p>Somos pioneiros na adequação dos espaços do estúdio para o portador de mobilidade reduzida. Temos acesso adaptado desde a recepção até uma sala exclusiva de atendimento.</p>
                        <p></p>
                    </div>
                </div>
            </div>

            <div className="sessaoImagem" />

            <div className="sessaoSobre">
                <div className="text">
                    <h1>SOBRE O ESTÚDIO</h1>
                    <p>Estúdio de tatuagem com mais de 600m² com amplo espaço de convivência, cafeteria, lanchonete, barbearia e bar - tudo pensado no conforto e praticidade dos nossos clientes</p>
                </div>
                <div className="mapbox">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3367511421234!2d-46.56535788817008!3d-23.556346061321427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e849b9ec4e1%3A0xc7fff19a9a4c92fa!2sR.%20Prof.%20Jo%C3%A3o%20de%20Oliveira%20Torres%2C%20405%20-%20Jardim%20Analia%20Franco%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003337-010!5e0!3m2!1spt-BR!2sbr!4v1728877414529!5m2!1spt-BR!2sbr" title='mapa' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <Rodape />
        </div>
    );
}