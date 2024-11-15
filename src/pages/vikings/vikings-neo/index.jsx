import './index.scss'
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Whats from '../../../components/Whats';
import { Link } from 'react-router-dom';

export default function Neo() {
    return (
        <div className='neo'>
            <Nav />
            <Whats />

            <div className='secao-1'>

                <div className='losango'>
                    <img src="/assets/images/neo.png" alt="img-tattoo" />
                    <p>NEO TRADICIONAL</p>
                </div>
                <div className='text'>
                    <div className='texto'>
                        <h3>Estilos -</h3>
                        <p>Neo Tradicional</p>
                    </div>
                    <h1>Neo Tradicional</h1>
                    <Link to='/Estilo'><button>VOLTAR</button></Link>
                </div>

            </div>
            <div className='secao-2'>
                <div className='line' />

                <div className='images'>
                    <img src="/assets/images/flamengo-tattoo.jpg" alt="img-tattoo" />
                    <img src="/assets/images/time-tattoo.jpg" alt="img-tattoo" />
                    <img src="/assets/images/mudanca-tattoo.jpg" alt="img-tattoo" />
                </div>

            </div>

            <Rodape />
        </div>
    )
}