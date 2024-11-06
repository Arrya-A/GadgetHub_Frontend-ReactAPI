import { Route, Routes } from 'react-router-dom'
import './App.css'
import './bootstrap.min.css'
import Header from './components/Header'
import Home from './pages/Home'

function App() {

  return (
   <>
   <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
   </>
  )
}

export default App
