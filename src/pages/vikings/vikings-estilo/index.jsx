import './index.scss'
import Nav from '../../../components/Nav';
import Rodape from '../../../components/Rodape';
import Tattoo from '../../../components/Tattoo';


export default function Estilos(){
    return(
    <div className='estilo'>
              <Nav />
              <Tattoo/>
              <Rodape />
    </div>
    )
}