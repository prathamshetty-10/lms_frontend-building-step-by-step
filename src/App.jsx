

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer'
import HomePage from "./Pages/HomePage"
import AboutUs from "./Pages/AboutUs"
import NotFound from './Pages/NotFound'

function App() {
  

  return (
    <>
    
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/about" element={<AboutUs/>}></Route>
      <Route path="*" element ={<NotFound/>}></Route>
    </Routes>
    </>
  )
}

export default App
