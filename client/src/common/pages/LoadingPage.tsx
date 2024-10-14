import Spinner from 'react-bootstrap/Spinner'

export default function LoadingPage() {
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
    </div>
  )
}
