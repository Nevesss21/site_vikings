import AdmLanding from './pages/adm/adm-landing';
import AdmSolicitacoes from './pages/adm/adm-solicitacoes';
import AdmMarcar from './pages/adm/adm-marcar';
import AdmRelatorio from './pages/adm/adm-relatorio';
import AdmRealizados from './pages/adm/adm-realizados';
import Studio from './pages/vikings/vikings-studio';
import Landingpage from './pages/vikings/vikings-landing';
import Contato from './pages/vikings/vikings-contato';
import AdmLogin  from './pages/adm/adm-login';
import InformacoesCliente from './pages/adm/adm-infocliente';
import Estilos from './pages/vikings/vikings-estilo';
import Agendamento from './pages/vikings/vikings-agendamento';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Navegacao() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/adm-landing' element={<AdmLanding />} />
        <Route path='/adm-realizados' element={<AdmRealizados />} />
        <Route path='/adm-marcar' element={<AdmMarcar />} />
        <Route path='/adm-relatorio' element={<AdmRelatorio />} />
        <Route path='/adm-solicitacoes' element={<AdmSolicitacoes />} />
        <Route path='/Estudio' element={<Studio />} />
        <Route path='/' element={<Landingpage />} />
        <Route path='/Contato' element={<Contato />} />
        <Route path='/adm-login' element={<AdmLogin />} />
        <Route path='/adm-infocliente' element={<InformacoesCliente />} />
        <Route path='/Estilo' element={<Estilos />} />
        <Route path='/Agendamento' element={<Agendamento />} />

      </Routes>
    </BrowserRouter>
  )
}