import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import About from './pages/About';
import Blog from './pages/Blog'; 

function App() {
  return (
      <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path= "/" element={ <Home />}> </Route>
          <Route path ="/about" element = { <About />}> </Route>
          <Route path ="/blog" element = { <Blog />}> </Route>
        </Routes>
      </BrowserRouter>
      <Footer />

      
      {/* <Footer />
      <BrowserRouter>
        <Routes>
          <Route path ="/blog" element = { <Blog />}> </Route>
        </Routes>
      </BrowserRouter> */}

      </>
  )
}

export default App;
