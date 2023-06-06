import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import Loading from './pages/Loading'
import Favorite from './pages/Favorite'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
      </Routes>
      </div>
  )
}

export default App