import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Create from './pages/Create'
import View from './pages/View'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Create/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
    </Router>
  )
}

export default App