import React from 'react';
import ReactDOM from  'react-dom';
import Home from  './components/home.jsx';
import Services from './components/services.jsx';
import Clients from  './components/clients.jsx';
import Team from './components/team.jsx';
import Contact from './components/contact.jsx';

document.addEventListener('DOMContentLoaded', function () {
   ReactDOM.render(
       <div>
           <Home/>
           <Services/>
           <Clients/>
           <Team/>
           <Contact/>
       </div>,
       document.getElementById('app')
   ) ;
});