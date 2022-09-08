import Home from './pages/Home'
import './styles/index.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home/12" />} />
        <Route path="/home/:userId" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
