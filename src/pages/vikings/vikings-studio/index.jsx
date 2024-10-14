import './index.scss'
import './fonts.scss'
import Nav from '../../../components/Nav';


export default function Estudio() {
    return (
        <div className="Estudio">
            <Nav />
            <div className="sessaoInicial">
                <h1>O ESTÚDIO</h1>
            </div>

            <div className="segundaSessao">
                <h2>O MAIOR ESTÚDIO DE TATUAGEM DA AMÉRICA LATINA, COM RECONHECIMENTO INTERNACIONAL, DEZENAS DE PRÊMIOS E EQUIPE ESPECIALIZADA.</h2>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec eros ut nisi dapibus venenatis. Quisque fermentum, nisl a consequat suscipit, tortor mi feugiat ipsum, id pulvinar quam lorem at risus. Sed a leo sit amet mi tincidunt luctus. Phasellus efficitur magna eu posuere ullamcorper. Donec ac feugiat ipsum.</p>
                </div>
                <img src="/assets/images/Mapa.png" alt="mapa" />
            </div>
        </div>
    );
}