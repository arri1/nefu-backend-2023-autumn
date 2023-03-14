import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './pages/header/Header';
import Main from './pages/main/Main';
import Footer from './pages/footer/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <Header />
      <Main />
      <Footer />
    </div>
  </React.StrictMode>
);

reportWebVitals();
