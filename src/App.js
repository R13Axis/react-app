
import { useState } from 'react';
import { Home } from './pages';
import { Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Routes>
    <Route exact path='/' element={<Home/>} />
  </Routes>
  )
  }

export default App;
