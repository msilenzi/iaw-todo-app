import { useNavigate } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'

export default function NotFound404Page() {
  const navigate = useNavigate()

  return (
    <CtaBanner
      title="Página no encontrada"
      description="Lo sentimos, no pudimos encontrar la página."
      ctaText="Volver al inicio"
      onCtaClick={() => navigate('/')}
    />
  )
}
