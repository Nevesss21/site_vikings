import "./index.scss";




export default function informacoescliente() {

return  (


<div className="conteiner-infocliente">
 
<header>

<div className='imagem-logo'>
<img src="/assets/images/logo-vikings.webp" alt="logo-vikings" />
</div>

        <div className='links-principal'>
        <a href="/adm-landing" className='animacao'>HOME</a>
        <a href="" className='animacao'>RELATÓRIOS</a>
        <a href="/adm-solicitacoes" className='animacao'>SEÇÕES</a>
        <a href="/adm-agendamento" className='animacao'>AGENDAMENTO</a>
</div>

 </header>

<div className="principal">
    


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
    <textarea></textarea>

</div>

    </section>

   <div  className="botaoConcluir">
    <a href="/adm-seções"><button>Concluir</button></a>
   </div>

 


</div> 

</div>

    
);

}