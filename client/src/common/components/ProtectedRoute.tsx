import { useAuth0 } from '@auth0/auth0-react'
import Loading from './Loading'
import CtaBanner from './CtaBanner'
import { Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0()

  if (isLoading) {
    return <Loading />
  }

  if (!isAuthenticated) {
    return (
      <CtaBanner
        title="Sesión no iniciada"
        description="Para poder acceder a esta funcionalidad tenés que iniciar sesión."
        ctaText="Iniciar Sesión"
        onCtaClick={() => loginWithRedirect()}
        icon="bi bi-shield-lock"
      />
    )
  }

  return <Outlet />
}
