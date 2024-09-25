import AdmLanding from './pages/adm/adm-landing'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function Navegacao(){

    return(

        <BrowserRouter>
            <Routes>
              <Route path='/' element={<AdmLanding/>} />
         </Routes>
      </BrowserRouter>

    )

}