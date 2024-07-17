import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { RegisterPage } from './app/pages/register/page'
import { LoginPage } from './app/pages/login/page'
import { MyShortcutsPage } from './app/pages/my-shortcuts/page'
import { PublicShortcutsPage } from './app/pages/index/page'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicShortcutsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/my-shortcuts" element={<MyShortcutsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
