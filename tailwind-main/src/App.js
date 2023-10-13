import Edititemform from './components/Edititemform';
import Allbuttons from './components/Allbuttons';
import React from 'react';
import Maintable from './components/Maintable';
import { Routes,Route } from 'react-router-dom';
import Additemform from './components/Additemform';
import Viewdata from './components/Viewdata';
import Loginpage from './components/Loginpage';
import Signuppage from './components/Signuppage';
import Signuppage1 from './components/Signuppage1';
import Doctorloginpage from './components/Doctorloginpage';
import Doctorgaurdianwebpage from './components/Doctorgaurdianwebpage';



function App() {
  return (
    
      <Routes>
        <Route path="/Additemform" element={<Additemform/>} />
        <Route path="/Edititemform" element={<Edititemform/>} />
        <Route path="/Allbuttons" element={<Allbuttons/>} />
        <Route path="/" element={<Maintable/>} />
        <Route path="/Viewdata/:id" element={<Viewdata/>} />
        <Route path="/Edititemform/:id" element={<Edititemform/>} />
        <Route path="/Loginpage/" element={<Loginpage/>} />
        <Route path="/Signuppage" element={<Signuppage/>} />
        <Route path="/Signuppage1/" element={<Signuppage1/>} />
        <Route path="/Doctorloginpage/" element={<Doctorloginpage/>} />
        <Route path="/Doctorgaurdianwebpage/" element={<Doctorgaurdianwebpage/>} />
      </Routes>
  );
}

export default App;
