import React from 'react'
import './App.css'
import Login from './components/Login'
import {BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Home from './components/Home';
import { SnackbarProvider } from 'notistack';
import { AppProvider } from './AppContext';
import Handicraft from './components/Handicraft';

import Listhandicraft from './components/Listhandicraft';
import Managehandicraft from './components/Managehandicraft';
import Detail from './components/Detail';
import About from './components/About';
import Contact from './components/Contact';
import Notfound from './components/Notfound';



const App = () => {
  

  return (
    <>
      <div>

      <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} iconVariant={{ success: '✔ 🎉😍', error: '👀',}}>
       <BrowserRouter>
       <AppProvider>
      <Navbar></Navbar>

       < Routes>
       <Route path='/Home' element={<Home />} />
       <Route path='/Login' element={<Login />} />
       <Route path= '/Navbar' element={<Navbar/>} />
       <Route path= '/Signup' element={<Signup/>} />
       <Route path= '/Handicraft' element={<Handicraft/>} />
  
       <Route path= '/Listhandicraft' element={<Listhandicraft/>} />
       <Route path= '/Managehandicraft' element={<Managehandicraft/>} />
       <Route path= '/Detail/:id' element={<Detail/>} />
       <Route path= '/About' element={< About/>} />
       <Route path= '/Contact' element={< Contact/>} />
       <Route path= '*' element={<Notfound/>} />
      
       
       
       
       
       </Routes>
       
       </AppProvider>
       </BrowserRouter>
       </SnackbarProvider>
      
     

      </div>
        
    </>
  )
}

export default App;
