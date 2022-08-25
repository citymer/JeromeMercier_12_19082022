import Home from './pages/Home'
import './styles/index.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home/12" />} />
        <Route path="/home/:userId" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
