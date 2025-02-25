import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path= "/" element={ <Home />}> </Route>
          <Route path ="/about" element = { <About />}> </Route>
        </Routes>
      </BrowserRouter>

      <Footer />
      <BrowserRouter>
        <Routes>
          <Route path ="/blog" element = { <Blog />}> </Route>
        </Routes>
      </BrowserRouter>

      </>
  )
}

export default App;
