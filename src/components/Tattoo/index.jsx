import './index.scss';
import { Link } from 'react-router-dom';

export default function Tattoo(){
    return(
<div className='tattoos'>
    <h1>CONHEÇA NOSSOS ESTILOS</h1>

    <div className='secao-losango'>

        <div className='coluna'>
            <Link to={'/Aquarela'}>
                <div>
                    <img src="/assets/images/pincel.png" alt="img-tattoo" />
                    <p>AQUARELA</p>
                </div>
            </Link>

            <Link to={'/Macri'}>
                <div>
                    <img src="/assets/images/macri.png" alt="img-tattoo" />
                    <p>MACRI</p>
                </div>
            </Link>
        </div>
        <div className='coluna'>
            <Link to={'/Black'}>
                <div>
                    <img className='bla' src="/assets/images/mao-black.png" alt="img-tattoo" />
                    <p>BLACK</p>
                </div>
            </Link>
            <Link to={'/Neo'}>
                <div className='neo'> 
                    <img src="/assets/images/neo.png" alt="img-tattoo" />
                    <p>NEO TRADICIONAL</p>
                </div>
            </Link>        
        </div>

        <div className='coluna'>
            <Link to={'/Fine-line'}>
                <div>
                    <img src="/assets/images/fine-line-image 1 (Traced).png" alt="img-tattoo" />
                    <p>FINE LINE</p>
                </div>
            </Link>
            <Link to={'/New'}>
                <div className='new'>
                    <img src="/assets/images/new.png" alt="img-tattoo" />
                    <p>NEW SCHOOL</p>
                </div>
            </Link>
        </div>

        <div className='coluna'>
            <Link to={'/Colorida'}>
                <div>
                    <img src="/assets/images/colorida.png" alt="img-tattoo" />
                    <p>COLORIDAS</p>
                </div>
            </Link>
            <Link to={'/Oriental'}>
                <div>
                    <img src="/assets/images/oriental.png" alt="img-tattoo" />
                    <p>ORIENTAL</p>
                </div>
            </Link>
        </div>

        <div className='coluna'>
            <Link to={'/Geometrico'}>
                <div>
                    <img src="/assets/images/geometrico.png" alt="img-tattoo" />
                    <p>GEOMETRICO</p>
                </div>
            </Link>
            <Link to={'/Realismo'}>
                <div>
                    <img src="/assets/images/realismo.png" alt="img-tattoo" />
                    <p>REALISMO</p>
                </div>
            </Link>
        </div>

    </div>
</div>
    );
}