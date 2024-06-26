import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"; 
import Layout from "./Layout";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.withCredentials= true;

function App() {
  

  return (
    <Routes>
      <Route path="/" element= {<Layout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Route>
  </Routes>
      
  )
}

export default App
