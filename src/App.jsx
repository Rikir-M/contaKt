import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import Loading from './pages/Loading'
import Favorite from './pages/Favorite'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </div>
  )
}

export default App