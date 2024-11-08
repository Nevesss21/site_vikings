import { Link } from 'react-router-dom'
import './index.scss'

export default function NavAdm(){
    return(
        <div className='nav-adm'>
            <header>
                <div className='imagem-logo'>
                    <img src="/assets/images/logo-vikings.webp" alt="logo-vikings" />
                </div>

                <div className='links-principal'>
                    
                    <Link to= '/adm-landing'className='animacao'>HOME</Link>
                    <Link to='/adm-cadastrar-relatorio' className='animacao'>RELATÓRIOS</Link>
                    <Link to='/adm-solicitacoes' className='animacao'>SEÇÕES</Link>
                </div>
            </header>
        </div>
    )

}