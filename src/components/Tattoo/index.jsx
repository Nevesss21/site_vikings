import './index.scss';
import { Link } from 'react-router-dom';

export default function Tattoo(){
    return(
<div className='tattoos'>
    <h1>CONHEÇA NOSSOS ESTILOS</h1>

    <div className='secao-losango'>

        <div className='coluna'>
            <Link to={'/'}>
                <div>
                    <img src="/assets/images/pincel.png" alt="" />
                    <p>AQUARELA</p>
                </div>
            </Link>

            <Link to={'/'}>
                <div>
                    <img src="/assets/images/macri.png" alt="" />
                    <p>MACRI</p>
                </div>
            </Link>
        </div>
        <div className='coluna'>
            <Link to={'/'}>
                <div>
                    <img className='bla' src="/assets/images/mao-black.png" alt="" />
                    <p>BLACK</p>
                </div>
            </Link>
            <Link to={'/'}>
                <div>
                    <img src="/assets/images/neo.png" alt="" />
                    <p>NEO TRADICIONAL</p>
                </div>
            </Link>        
        </div>

        <div className='coluna'>
            <Link to={'/'}>
                <div>
                    <img src="/assets/images/fine-line.png" alt="" />
                    <p>FINE LINE</p>
                </div>
            </Link>
            <Link to={'/'}>
                <div>
                    <img src="/assets/images/new.png" alt="" />
                    <p>NEW SCHOOL</p>
                </div>
            </Link>
        </div>

        <div className='coluna'>
            <Link to={'/'}>
                <div>
                    <img src="/assets/images/colorida.png" alt="" />
                    <p>COLORIDAS</p>
                </div>
            </Link>
            <Link to={'/'}>
                <div>
                    <img src="/assets/images/oriental.png" alt="" />
                    <p>ORIENTAL</p>
                </div>
            </Link>
        </div>

        <div className='coluna'>
            <Link to={'/'}>
                <div>
                    <img src="/assets/images/geometrico.png" alt="" />
                    <p>GEOMETRICO</p>
                </div>
            </Link>
            <Link to={'/'}>
                <div>
                    <img src="/assets/images/realismo.png" alt="" />
                    <p>REALISMO</p>
                </div>
            </Link>
        </div>

    </div>
</div>
    );
}