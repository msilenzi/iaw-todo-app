import { Container } from 'react-bootstrap'
import CtaBanner from '../../../common/components/CtaBanner'
import { useAuth0 } from '@auth0/auth0-react'

export default function AuthPage() {
  const { loginWithRedirect } = useAuth0()

  return (
    <Container>
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <CtaBanner
          title="No iniciaste sesión"
          description="Para poder acceder a las funcionalidades de la web tenés que iniciar sesión"
          ctaText="Iniciar Sesión"
          onCtaClick={() => loginWithRedirect()}
          icon="bi bi-shield-lock"
        />
      </div>
    </Container>
  )
}
