import React from 'react';
import Login from './PAGES/Login.js';
import Logup from './PAGES/Logup.js';
import Inicio from './PAGES/Inicio';
//import NavBar from './PAGES/principal';
import FriendList from './PAGES/FriendList';
import AddFriend from './PAGES/AddFriend';
import Regalo from './PAGES/Regalo'
import Intercambio from './PAGES/Intercambio'
import Unirse from './PAGES/Unirse'
import NotFound from './PAGES/NotFound.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/logup" element={<Logup/>}></Route>
            <Route exact path="/inicio" element={<Inicio/>}></Route>
            <Route exact path="/friendList" element={<FriendList/>}></Route>
            <Route exact path="/addFriend" element={<AddFriend/>}></Route>
            <Route exact path="/regalo" element={<Regalo/>}></Route>
            <Route exact path="/intercambio" element={<Intercambio/>}></Route>
            <Route exact path="/unirse" element={<Unirse/>}></Route>
            <Route element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;