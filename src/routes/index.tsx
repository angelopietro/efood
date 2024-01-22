import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Restaurante from '../pages/Restaurante'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante/:id" element={<Restaurante />} />
    </Routes>
  )
}

export default Rotas
