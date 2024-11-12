import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navegacao from './router.jsx';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegacao />
    <Toaster
      position="bottom-right"
      reverseOrder={false}
    />
  </React.StrictMode>
);

