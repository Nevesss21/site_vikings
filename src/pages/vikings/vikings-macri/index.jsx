import './index.scss'

import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Whats from '../../../components/Whats';
import { Link } from 'react-router-dom';

export default function Macri(){
    return(
        <div className='macri'>
            <Nav/>
            <Whats/>

            <div className='secao-1'>

               <div className='losango'>
                    <img src="/assets/images/macri.png" alt="" />
                    <p>MACRI</p>
                </div>
                <div className='text'>
                    <div className='texto'>
                        <h3>Estilos -</h3>
                        <p>Macri</p>
                    </div>
                    <h1>Macri</h1>
                <Link to ='/Estilo'><button>VOLTAR</button></Link>
                </div>
           
            </div>
            <div className='secao-2'>
            <div className='line' />
            
            <div className='images'>
                <img src="/assets/images/macri-1-tattoo.jpg" alt="" />
                <img src="/assets/images/macri-2-tattoo.jpg" alt="" />
                <img src="/assets/images/macri-3-tattoo.jpg" alt="" />
            </div>

            </div>

            <Rodape/>
        </div>
    )
}