import { Link } from 'react-router-dom'
import './index.scss'
import NavAdm from '../../../components/Nav-adm'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function AdmLanding() {

    const [token, setToken] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        let token = localStorage.getItem('USUARIO')
        setToken(token)

        if (token == null) {
            navigate("/")
        }
    }, [])

    async function sair() {
        localStorage.setItem('USUARIO', null)
        navigate('/')
    }

    return (
        <div className="conteiner-adm">
            <NavAdm />

            <div className='corpo'>

                <div className='texto'>
                    <h1>CONSULTE AQUI OS HORARIOS AGENDADOS</h1>
                    <div><button className='animacao' onClick={sair}>SAIR</button></div>
                </div>

                <div className='texto'>
                    <h3>Você pode ter acesso a todos os <br /> horarios e informações dos <br />
                        clientes juntamente com as suas <br /> opiniões e preferências</h3>
                </div>
            </div>

            <div className='imagens'>

                <div className='sessoesInfo'>
                    <div className='infos'>
                        <h1>Faça o seu relato. Defina como foi sua progressão do dia, semana, mes e ano</h1>
                        <Link to='/adm-relatorio'> <button className='oi1'>Relatar</button></Link>
                    </div>
                </div>

                <div id='sessaodois' className='sessoesInfo'>
                    <div className='infos'>
                        <h1>Analise as seções pendentes e faça você mesmo o agendamento das seções </h1>
                        <Link to='/adm-solicitacoes'> <button className='oi2'>Seguir</button></Link>
                    </div>
                </div>

                <div id='sessaotres' className='sessoesInfo'>
                    <div className='infos'>
                        <h1>Consulte  as informações da maneira que quiser, decida o filtro para melhor aproveitamento das informações</h1>
                        <Link to='/adm-realizados'><button className='oi1'>Consultar</button></Link>
                    </div>
                </div>

            </div>

            <div className='duvidas'>

                <hr className='linha' />

                <div className='rodape'>
                    <img src="/assets/images/Logo-valhalla.png" alt="logo-valhalla" />
                    <h1>Duvidas</h1>
                    <p>Caso haver duvidas ou possiveis ocorrências,entre em conato com a  equipe de programadores da Valhalla diretamente no site</p>
                </div>


                <div className='botao-valhalla'>
                    <Link to={'http://4.172.207.208:3043'}><button>Ir para Valhalla <img src="/assets/images/valhalla-logo 3.png" alt="logo-valhalla" /></button></Link>
                </div>

            </div>

        </div>
    );
}


