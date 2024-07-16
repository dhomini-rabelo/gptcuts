import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './app/pages/index/page'
import { RegisterPage } from './app/pages/register/page'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}
