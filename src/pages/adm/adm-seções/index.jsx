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

        <input type="text" placeholder="Pesquise pelo nome da seção..."  />


        <h2>Sessões Marcadas</h2>

        <div className="espaço">
            
        </div>

      


        
    </div>
    )
}