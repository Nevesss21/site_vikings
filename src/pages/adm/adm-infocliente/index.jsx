import "./index.scss";




export default function informacoescliente() {

return  (


<div className="conteiner-infocliente">
 

<nav className="cabecalho">
    
<img src="/assets/images/logo-vikings.webp" alt="logo-vikings" />

<button>VOLTAR</button>

</nav>

<div className="bloco" >

<div className="subBloco" >

<h2>LUCAS DO ROSARIO</h2>

<h2>CPF:54388942-90</h2>

</div>

<div className="subBloco">

<h2>DATA:17/08/1994</h2>

<h2>Horário:17:27</h2>

</div>



</div>  

<h1 className="tituloAnotacao"  >Anotações</h1>

<section className="blocoPai" >

<div className="anotacao">
    <input type="text"/>

</div>

    </section>

   <div  className="botaoConcluir">
    <button>Concluir</button>
   </div>

   <img className="imagemLa" src="/assets/images/logo-vikings.webp" alt="logo-vikings" />


</div> // DIV PRINCIPAL!!!


    
);

}