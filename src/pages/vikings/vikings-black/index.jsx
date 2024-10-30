import './index.scss'

import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Whats from '../../../components/Whats';
import { Link } from 'react-router-dom';

export default function Black(){
    return(
        <div className='black'>
            <Nav/>
            <Whats/>

            <div className='secao-1'>

               <div className='losango'>
                    <img src="/assets/images/mao-black.png" alt="" />
                    <p>BLACK</p>
                </div>
                <div className='text'>
                    <div className='texto'>
                        <h3>Estilos -</h3>
                        <p>Black</p>
                    </div>
                    <h1>Black</h1>
                    <Link to ='/Estilo'><button>VOLTAR</button></Link>
                </div>
           
            </div>
            <div className='secao-2'>
            <div className='line' />
            
            <div className='images'>
                <img src="/assets/images/antes-depois-tattoo.jpg" alt="" />
                <img src="/assets/images/caveira-relogio-tattoo.jpg" alt="" />
                <img src="/assets/images/aranha-tattoo.jpg" alt="" />
                <img src="/assets/images/leao-tattoo.jpg" alt="" />
                <img src="/assets/images/olho-tattoo.jpg" alt="" />
                <img src="/assets/images/rosto-tattoo.jpg" alt="" />
                <img src="/assets/images/indio-tattoo.jpg" alt="" />
                <img src="/assets/images/gato-tattoo.jpg" alt="" />
                <img src="/assets/images/esultura-tattoo.jpg" alt="" />
                <img src="/assets/images/lobo-tattoo.jpg" alt="" />
                <img src="/assets/images/tigre-braco-tattoo.jpg" alt="" />
                <img src="/assets/images/india-tattoo.jpg" alt="" />
                <img src="/assets/images/mulher-tattoo.jpg" alt="" />
                <img src="/assets/images/ninja-tattoo.jpg" alt="" />
                <img src="/assets/images/leao-flor-tattoo.jpg" alt="" />
                <img src="/assets/images/tigre-mao-tattoo.jpg" alt="" />
                <img src="/assets/images/leao-coracao-tattoo.jpg" alt="" />
            </div>

            </div>

            <Rodape/>
        </div>
    )
}