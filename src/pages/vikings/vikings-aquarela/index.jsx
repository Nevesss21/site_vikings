import './index.scss'

import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Whats from '../../../components/Whats';

export default function Aquarela (){
    return(
        <div className='aquarela'>
            <Nav/>
            <Whats/>

            <div className='secao-1'>

                <div className='losango'>
                    <img src="/assets/images/pincel.png" alt="" />
                    <p>AQUARELA</p>
                </div>

                <div className='text'>
                    <div className='texto'>
                        <h3>Estilos -</h3>
                        <p>Aquarela</p>
                    </div>
                    <h1>Aquarela</h1>
                </div>
           
            </div>
            <div className='secao-2'>
            <div className='line' />
            
            <div className='images'>
                <img src="/assets/images/agua-viva.png" alt="" />
            </div>

            </div>

            <Rodape/>
        </div>
    )
}