import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './app/pages/index/page'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
