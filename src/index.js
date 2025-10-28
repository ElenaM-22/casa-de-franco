import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import '../src/css/index.css';
import Layout from './Layout';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Fado from '../src/pages/Fado';
import Menu from '../src/pages/Menu';


export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path = "about" element={<About />}/>
          <Route path = "contact" element={<Contact />}/>
          <Route path = "fado" element={<Fado />}/>
          <Route path = "menu" element={<Menu />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);