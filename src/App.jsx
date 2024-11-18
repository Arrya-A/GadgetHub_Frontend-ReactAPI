import { Route, Routes } from 'react-router-dom'
import './App.css'
import './bootstrap.min.css'
import Header from './components/Header'
import Home from './pages/Home'
import Add from './components/Add'
import Edit from './components/Edit'

function App() {

  return (
   <>
   <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:id' element={<Edit/>} />
      </Routes>
   </>
  )
}

export default App
