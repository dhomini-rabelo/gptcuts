import { useEffect, useState } from 'react'
import { NavigateFunction, Outlet, useNavigate } from 'react-router-dom'
import { useLoginStore } from '../../../../code/stores/auth'

export default function Auth(): JSX.Element | null {
  const navigate: NavigateFunction = useNavigate()
  const authToken = useLoginStore((state) => state.accessToken)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    authToken !== null,
  )

  useEffect(() => {
    if (authToken === null) {
      navigate('/login', { replace: true })
    } else {
      setIsAuthenticated(true)
    }
  }, [navigate])

  return isAuthenticated ? <Outlet /> : null
}
