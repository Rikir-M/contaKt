import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import Loading from './pages/Loading'

const App = () => {
  return (
    <div>
      {/* <div className="px-6 py-1 hover:bg-primary hover:text-white transition-all duration-200 rounded-full border-2 border-primary w-96 text-center uppercase tracking-wider font-semibold  text-primary">Login</div> */}
      <Routes>
        {/* <Route path='/' element={<Dashboard/>}/>
        <Route path='*' element={<NotFound/>}/> */}
        <Route path='/' element={<Loading/>}/>
      </Routes>
      </div>
  )
}

export default App