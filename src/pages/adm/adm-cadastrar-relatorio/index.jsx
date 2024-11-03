import NavAdm from '../../../components/Nav-adm';
import './index.scss';
import { Link } from 'react-router-dom';

export default function CadastrarRelatorio(){
    return(
        <div className='cadastrar-relatorio'>
            <NavAdm/>
            <div className='secao-cadastro'>

                <div className='cadastrar'>
                    <div className='espaco'>
                    <div className='input'>
                        <h3>Informe a data do Relatório</h3>
                        <input type="date" />
                    </div>

                    </div>
                
                    <div className='escolha'>
                        <h1>Escolha os filtros do seu relatorio</h1>
                        <div>
                            <h3>Total de pessoas</h3>
                            <input type="checkbox" name="Total de pessoas" value=""/>
                        </div>
                        <div>
                            <h3>Renda fina</h3>
                            <input type="checkbox" name="Renda fina" value=""/>
                        </div>
                        <div>
                            <h3>Clientes do genero masculino</h3>
                            <input type="checkbox" name="Clientes do genero masculino" value=""/>
                        </div>
                        <div>
                            <h3>Clientes do genero feminino</h3>
                            <input type="checkbox" name="Clientes do genero feminino" value=""/>
                        </div>
                        <div>
                            <h3>Clientes do genero outro</h3>
                            <input type="checkbox" name="Clientes do genero outro" value=""/>
                        </div>
                        <div>
                            <h3>Clientes com idade superior a 30</h3>
                            <input type="checkbox" name="Clientes com idade superior a 30" value=""/>
                        </div>
                        <div>
                            <h3>Clientes com idade superior igual a 18</h3>
                            <input type="checkbox" name="Clientes com idade superior igual a 18" value=""/>
                        </div>
                        <div>
                            <h3>Clientes com idade menor que 18</h3>
                            <input type="checkbox" name="Clientes com idade menor que 18" value=""/>
                        </div>
                        <div>
                            <h3>Escollher todas as opcoes</h3>
                            <input type="checkbox" name="Todas as opcoes" value=""/>
                        </div>
                    </div>
                </div>
                    <div className='botoes'>
                    <Link to='/adm-realizados'><button>Ver Relatórios Ja criados</button></Link>
                    <button>Criar novo Relatório</button>
                    </div>

            </div>

        </div>
    );
}