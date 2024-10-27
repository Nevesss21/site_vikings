import './index.scss'

import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Whats from '../../../components/Whats';
import { Link } from 'react-router-dom';

export default function Oriental(){
    return(
        <div className='oriental'>
            <Nav/>
            <Whats/>

            <div className='secao-1'>

               <div className='losango'>
                    <img src="/assets/images/oriental.png" alt="" />
                    <p>ORIENTAL</p>
                </div>
                <div className='text'>
                    <div className='texto'>
                        <h3>Estilos -</h3>
                        <p>Oriental</p>
                    </div>
                    <h1>Oriental</h1>
                </div>
                <Link to ='/Estilo'><button>VOLTAR</button></Link>
           
            </div>
            <div className='secao-2'>
            <div className='line' />
            
            <div className='images'>
                <img src="/assets/images/ninja-tattoo.jpg" alt="" />
            </div>

            </div>

            <Rodape/>
        </div>
    )
}