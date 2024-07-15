import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Home } from './app/pages/index/page'

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />} />),
)
