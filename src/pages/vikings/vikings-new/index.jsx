import './index.scss'

import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Whats from '../../../components/Whats';
import { Link } from 'react-router-dom';

export default function New(){
    return(
        <div className='new'>
            <Nav/>
            <Whats/>

            <div className='secao-1'>

               <div className='losango'>
                    <img src="/assets/images/new.png" alt="" />
                    <p>NEW SCHOOL</p>
                </div>
                <div className='text'>
                    <div className='texto'>
                        <h3>Estilos -</h3>
                        <p>New School</p>
                    </div>
                    <h1>New School</h1>
                </div>
                <Link to ='/Estilo'><button>VOLTAR</button></Link>
           
            </div>
            <div className='secao-2'>
            <div className='line' />
            
            <div className='images'>
                <img src="/assets/images/luffy-tattoo.jpg" alt="" />
            </div>

            </div>

            <Rodape/>
        </div>
    )
}