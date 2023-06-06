import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import Loading from './pages/Loading'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </div>
  )
}

export default App