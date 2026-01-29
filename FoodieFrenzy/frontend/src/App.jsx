import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import ContactPage from './pages/ContactPage/ContactPage'
import AboutPage from './pages/AboutPage/AboutPage'
import Cart from './pages/Cart/Cart'
import Menu from './pages/Menu/Menu'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/menu' element={<Menu/>}/>
    </Routes>
  )
}

export default App