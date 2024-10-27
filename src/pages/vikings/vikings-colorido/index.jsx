import './index.scss'

import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Whats from '../../../components/Whats';
import { Link } from 'react-router-dom';

export default function Colorido(){
    return(
        <div className='colorido'>
            <Nav/>
            <Whats/>

            <div className='secao-1'>

               <div className='losango'>
                    <img src="/assets/images/colorida.png" alt="" />
                    <p>COLORIDAS</p>
                </div>
                <div className='text'>
                    <div className='texto'>
                        <h3>Estilos -</h3>
                        <p>Coloridas</p>
                    </div>
                    <h1>Colorido</h1>
                </div>
                <Link to ='/Estilo'><button>VOLTAR</button></Link>
           
            </div>
            <div className='secao-2'>
            <div className='line' />
            
            <div className='images'>
                <img src="/assets/images/colorido-tattoo.jpg" alt="" />
                <img src="/assets/images/batman-tattoo.jpg" alt="" />
                <img src="/assets/images/avatar-tattoo.jpg" alt="" />
            </div>

            </div>

            <Rodape/>
        </div>
    )
}