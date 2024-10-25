import "./index.scss";
import "./fonts.scss";

export default function AdmRelatorio() {
  return (
    <div className="conteiner-relatorio">
      <header>
                    <div className='imagem-logo'>
                        <img src="/assets/images/logovikings.webp" alt="logo-vikings" />
                    </div>
                    <div className='links-principal'>
                        <a href="/" className='animacao'>HOME</a>
                    </div>

                    <button className="voltar">Voltar</button>
                </header>

      <hr />

      <div className="principal">

      <input type="text"  className="relatorio" value="relatório 01 - 21/05/2024"/>

      <div className="fora">
     

            <h1>Total de pessoas no mês: 83</h1>

            <h1>Renda final: R$ 12.000,00</h1>

            <h1>Vlientes do gênero masculino: 38</h1>

            <h1>Clientes do gênero feminino: 30</h1>

            <h1>Clientes do gênero igual a outro : não sei</h1>

            <h1>Clientes com idade superior a 30 anos: 20</h1>

            <h1>Clientes maior que 18 anos ou igual : 49</h1>

            <h1>Clientes com Idade menor que 18 ano : 14</h1>

            <h1>Percentual de crescimento: 30%</h1>


            <input  className="obs" type="text" placeholder="Observações..." />
        
      </div>

      <button className="concluido"> Concluído</button>


      </div>


     
    </div>
  );
}
