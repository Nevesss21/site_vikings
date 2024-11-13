import './index.scss'
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Whats from '../../../components/Whats';
import { Link } from 'react-router-dom';

export default function FineLine() {
    return (
        <div className='fine-line'>
            <Nav />
            <Whats />

            <div className='secao-1'>

                <div className='losango'>
                    <img src="/assets/images/fine-line.png" alt="img-tattoo" />
                    <p>FINE LINE</p>
                </div>
                <div className='text'>
                    <div className='texto'>
                        <h3>Estilos -</h3>
                        <p>Fine Line</p>
                    </div>
                    <h1>Fine Line</h1>
                    <Link to='/Estilo'><button>VOLTAR</button></Link>
                </div>


            </div>
            <div className='secao-2'>
                <div className='line' />

                <div className='images'>
                    <img src="/assets/images/line-tattoo.jpg" alt="img-tattoo" />
                </div>

            </div>

            <Rodape />
        </div>
    )
}