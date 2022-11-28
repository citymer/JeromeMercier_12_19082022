import Home from './pages/Home'
import './styles/index.scss'
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom'
import Error404 from './pages/Error404'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home/12" />} />
        <Route path="/home/:userId" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </HashRouter>
  )
}

export default App
