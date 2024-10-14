import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

type NotFound404Props = {
  title?: string
  description?: string
}

export default function NotFound404({
  title = 'Página no encontrada',
  description = 'Lo sentimos, no pudimos encontrar la página',
}: NotFound404Props) {
  const navigate = useNavigate()

  return (
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
      <div>
        <h2 className="fs-1">{title}</h2>
        <p className="mb-4">{description}</p>
        <Button onClick={() => navigate('/')}>Volver al inicio</Button>
      </div>
      <div className="text-secondary" style={{ fontSize: '8rem' }}>
        <i className="bi bi-patch-question"></i>
      </div>
    </div>
  )
}
