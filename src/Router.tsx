import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/Default'
import { Checkout } from './pages/Checkout'
import { Success } from './pages/Success'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/:orderId/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
