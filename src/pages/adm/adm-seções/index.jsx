import "./index.scss"







export default function AdmSecoes() {

    return (
        <div className="conteiner-secoes">
             <header>

<div className='imagem-logo'>
    <img src="/assets/images/logo-vikings.webp" alt="logo-vikings" />
</div>

<div className='links-principal'>
    <a href="/" className='animacao'>Home</a>
    <a href="/adm-marcar" className='animacao'>Marcar</a>
    <a href="" className='animacao' >Arquivadas</a>

</div>
</header>

<div className="principal1">

<input type="text" placeholder="Pesquise pelo nome da seção..."  />


<h1>Sessões Marcadas</h1>
</div>

      

<div className="bloquinhos-pretos">

    <div className="bloco1">

        <div className="parte1">
                    <h3 className="principais">Lucas do Rosário</h3>
                    <p>CPF:582.365.258-56</p>
        </div>
        
        <div className="parte2">
                <div className="linha1">
                <p>Data: 17/08/1994</p>
            <img className="icones" src="/assets/images/canetabranca.png" alt="as"/>
        </div>

        <div className="linha2">
            <p>Horário: 17:27 </p>
            <img className="icones" src="/assets/images/lixeirabranca.png" alt=""/>
        </div>

        

            
        </div>


        
        </div>
    </div>

    <div className="bloco2">
        <div className="parte1">
                    <h3 className="principais">Lucas do Rosário</h3>
                    <p>CPF:582.365.258-56</p>
        </div>
       

        <div className="linha2">
            <p>Horário: 17:27 </p>
            <img className="icones" src="/assets/images/lixeirabranca.png" alt=""/>
        </div>

     

    </div>



    

    </div>
    
            )
}