import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/home/home';
import Adm from './pages/home/adm';

 
function App() {
  return (
    <BrowserRouter> 
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adm" element={<Adm />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
