import './index.scss'
import './fonts.scss'


export default function Cabecalho() {
  return (
    <main>
      <header>
        <div className="imagem-logo">
          <img src="/public/assets/images/logovikings.webp" alt="logo-vikings" />

        </div>

        <div className="links-principal">
          <a href="/">Home</a>
          <a href="../adm-marcar">Marcar</a>
          <a href="/">Arquivadas</a>
        </div>
      </header>
    </main>
  );
}
