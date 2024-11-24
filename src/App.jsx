import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  )
  return <RouterProvider router={router}/>  
}

export default App
