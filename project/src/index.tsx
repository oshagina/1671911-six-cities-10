import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
//создаем root элемент
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  //строгий режим для реакта
  <React.StrictMode>
    <App placeCardCount={3}/>
  </React.StrictMode>,
);
