import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

export default function NotFound404() {
  const navigate = useNavigate()

  return (
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
      <div>
        <h2 className="fs-1">Página no encontrada</h2>
        <p className="mb-4">Lo sentimos, no pudimos encontrar la página</p>
        <Button onClick={() => navigate('/')}>Volver al inicio</Button>
      </div>
      <div className="text-secondary" style={{ fontSize: '8rem' }}>
        <i className="bi bi-patch-question"></i>
      </div>
    </div>
  )
}
