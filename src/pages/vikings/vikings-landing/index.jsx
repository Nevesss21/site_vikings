import './index.scss'
import { Link } from 'react-router-dom';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Whats from '../../../components/Whats';
import Tattoo from '../../../components/Tattoo';

// (npm i swiper) todas as importações necessárias 

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/react';

export default function Landingpage() {


    // define as imagens do carrossel
    const sliderCarrossel = [
        { id: '1', image: '/assets/images/leao-tattoo.jpg' },
        { id: '2', image: '/assets/images/olho-tattoo.jpg' },
        { id: '3', image: '/assets/images/rosto-tattoo.jpg' },
        { id: '3', image: '/assets/images/indio-tattoo.jpg' }
    ]

    return (
        <div className="ladingpage">
            <Nav />
            <Whats />

            <div className='secao-inicial-landing'>
                <div className='ba'>

                </div>

                <div className='texto'>
                    <h1>PIONEIRISMO E MODERNIDADE
                        EM CADA TRAÇO</h1>
                    <Link to='/Estilo'><button>VEJA NOSSAS TATTOOS</button></Link>
                </div>
            </div>

            <div className='secao-estudio'>
                <h1 className='titulo'>
                    FAZENDO HISTÓRIA <br />
                    NO MUNDO DA TATUAGEM DESDE 1977
                </h1>

                <div className='flex'>

                    <div className='coluna'>
                        <p>Trabalho seguro e responsável na aplicação de piercings, retirada de tatuagens a laser e criação de obras de arte em sua pele.</p>

                        <h1>ACESSIBILIDADE</h1>
                        <p>Somos pioneiros na adequação dos espaços do estúdio para o portador de mobilidade reduzida. Temos acesso adaptado desde a recepção até uma sala exclusiva de atendimento.</p>
                    </div>

                    <div className='coluna'>
                        <p>O maior estúdio de tatuagem da América Latina, com reconhecimento internacional, dezenas de prêmios e equipe especializada.</p>
                        <h1>BIOSSEGURANÇA</h1>
                        <p>AO Vikings Tattoo é certificada pela Vigilância Sanitária atuando sob rígidas normas de biossegurança e assepsia. Possui uma sala exclusiva para a esterilização dos equipamentos.</p>
                    </div>

                </div>
                <Link to='/Estudio'><button>CONHEÇA NOSSO ESTÚDIO</button></Link>
            </div>



            <div className='secao-carrossel'>
                <h1>NOSSAS ARTES</h1>

                <div className='carrossel'>
                    <Swiper
                        slidesPerView={3}               // quantidade de itens mostrados por vez
                        pagination={{ clickable: true }}
                        navigation                      // setas 
                    >
                        {sliderCarrossel.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img
                                    src={item.image}
                                    alt="Slider"
                                    className='slideItem'
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='bot'>
                    <Link to='/'><button>CONHECER MAIS</button></Link>
                </div>
            </div>

            <div className='estilo'>
                <Tattoo />
                <Link to='/Estilo'><button>VEJA TODOS OS ESTILOS</button></Link>
            </div>
            <div className='secao-contato'>
                <h1>SOLICITE UM ORÇAMENTO E AGENDE SUA TATTOO</h1>
                <Link to='/Agendamento'><button >ENTRE EM CONTATO</button></Link>
            </div>
            <div className='secao-insta'>
                <img src="assets/images/instagram.png" alt="insta" /><h1>SIGA-NOS NO INSTAGRAM</h1>
            </div>

            <Rodape />

        </div>
    );
}