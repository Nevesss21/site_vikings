import './index.scss'
import './fonts.scss'
import { Link } from 'react-router-dom';
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';


export default function Landingpage() {
    return (
        <div className="ladingpage">
            <Nav/>

            <div className='secao-inicial-landing'>

                <div className='texto'>
                <h1>PIONEIRISMO E MODERNIDADE
                EM CADA TRAÇO</h1>
                <button>VEJA NOSSAS TATTOOS</button>
                </div>
                
                <div className='whatsapp'>
                    <button>Agende sua Tattoo pelo Whatsapp</button>
                </div>
            </div>

            <Rodape/>

        </div>
    );
}
