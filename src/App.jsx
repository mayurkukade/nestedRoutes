
import MainPage from './components/MainPage'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/main/*' element={<MainPage/>} />
    </Routes>
      
    </>
  )
}

export default App
