
import AdmLanding from './pages/adm/adm-landing';
import AdmAgendamento from './pages/adm/adm-agendamento';
import AdmMarcar from './pages/adm/adm-marcar';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function Navegacao(){

    return(

        <BrowserRouter>
            <Routes>
              <Route path='/' element={<AdmLanding/>}/>
              <Route path='/adm-agendamento' element={<AdmAgendamento/>} />
              <Route path='/adm-marcar' element={<AdmMarcar/>} />
         </Routes>
      </BrowserRouter>

    )

}