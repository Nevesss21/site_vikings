import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navegacao from './router.jsx';
import AdmLanding from './pages/adm/adm-landing/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegacao/>
  </React.StrictMode>
);

