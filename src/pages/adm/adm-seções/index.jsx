import "./index.scss"


import Bloco from "../../../components/Bloco"



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

        <Bloco/>

       
       

                    
                </div>
            </div>

      





     )
}