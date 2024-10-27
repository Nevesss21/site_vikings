import AdmLanding from './pages/adm/adm-landing';
import AdmSolicitacoes from './pages/adm/adm-solicitacoes';
import AdmMarcar from './pages/adm/adm-marcar';
import AdmSecoes from './pages/adm/adm-seções';
import AdmRelatorio from './pages/adm/adm-relatorio';
import AdmRealizados from './pages/adm/adm-realizados';
import Studio from './pages/vikings/vikings-studio';
import Landingpage from './pages/vikings/vikings-landing';
import Contato from './pages/vikings/vikings-contato';
import AdmLogin  from './pages/adm/adm-login';
import InformacoesCliente from './pages/adm/adm-infocliente';
import Estilos from './pages/vikings/vikings-estilo';
import Agendamento from './pages/vikings/vikings-agendamento';
import Aquarela from './pages/vikings/vikings-aquarela';
import Realismo from './pages/vikings/vikings-realismo';
import Neo from './pages/vikings/vikings-neo';
import New from './pages/vikings/vikings-new';
import Macri from './pages/vikings/vikings-macri'; 
import Black from './pages/vikings/vikings-black';
import Geometrico from './pages/vikings/vikings-geometrico';
import Oriental from './pages/vikings/vikings-oriental';
import FineLine from './pages/vikings/vikings-fine-line';
import Colorido from './pages/vikings/vikings-colorido';


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
        <Route path='/adm-seções' element={<AdmSecoes />} />
        <Route path='/Estudio' element={<Studio />} />
        <Route path='/' element={<Landingpage />} />
        <Route path='/Contato' element={<Contato />} />
        <Route path='/adm-login' element={<AdmLogin />} />
        <Route path='/adm-infocliente' element={<InformacoesCliente />} />
        <Route path='/Estilo' element={<Estilos />} />
        <Route path='/Agendamento' element={<Agendamento />} />
        <Route path='/Aquarela' element={<Aquarela/>} />
        <Route path='/Realismo' element={<Realismo/>} />
        <Route path='/Neo' element={<Neo/>} />
        <Route path='/New' element={<New/>} />
        <Route path='/Black' element={<Black/>} />
        <Route path='/Macri' element={<Macri/>} />
        <Route path='/Geometrico' element={<Geometrico/>} />
        <Route path='/Oriental' element={<Oriental/>} />
        <Route path='/Fine-line' element={<FineLine/>} />
        <Route path='/Colorida' element={<Colorido/>} />

      </Routes>
    </BrowserRouter>
  )
}