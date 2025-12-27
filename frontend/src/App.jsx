import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CheckoutPage from './pages/CheckoutPage'
import './App.css'
import OrderPages from './pages/OrderPages'

function App() {


  return (
    <Routes>
      {/* path="/" same as index */}
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<OrderPages />} />

    </Routes>
  )
}

export default App
