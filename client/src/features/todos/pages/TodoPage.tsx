import Button from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

export default function TodoPage() {
  const date = new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date())

  return (
    <>
      <div className="d-flex justify-content-between flex-column flex-md-row">
        <h2 className="m0">Comprar Pan</h2>
        <div className="d-flex gap-2">
          <Button variant="primary">
            <i className="bi bi-pencil-fill"></i>
          </Button>
          <Button variant="danger">
            <i className="bi bi-trash-fill"></i>
          </Button>
        </div>
      </div>

      <p className="fw-light text-muted mb-4">Creado el {date}</p>

      <ToggleButtonGroup
        className="mb-5"
        type="radio"
        name="options"
        value="sin-terminar"
      >
        <ToggleButton
          id="sin-terminar"
          value="sin-terminar"
          variant="outline-primary"
        >
          Sin Terminar
        </ToggleButton>
        <ToggleButton
          id="terminado"
          value="terminado"
          variant="outline-primary"
        >
          Terminado
        </ToggleButton>
      </ToggleButtonGroup>

      <section>
        <h4>Descripción</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          consequuntur natus consequatur minima nesciunt possimus, fugit fugiat
          debitis, officiis rerum expedita, nemo aliquam asperiores harum.
          Dolorum suscipit atque molestias earum!
        </p>
      </section>
    </>
  )
}
