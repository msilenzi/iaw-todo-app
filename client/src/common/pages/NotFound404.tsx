import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function NotFound404() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar expand="lg" className="bg-body-tertiary mb-5">
        <Container>
          <Navbar.Brand href="#home">Todo App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" active>
                Todos
              </Nav.Link>
              <Nav.Link href="#link" active={false}>
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="flex-grow-1 mb-5">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
          <div>
            <h2 className="fs-1">Página no encontrada</h2>
            <p className="mb-4">Lo sentimos, no pudimos encontrar la página</p>
            <Button>Volver al inicio</Button>
          </div>
          <div className="text-secondary" style={{ fontSize: '8rem' }}>
            <i className="bi bi-patch-question"></i>
          </div>
        </div>
      </Container>

      <footer>
        <span className="text-center text-muted d-inline-block w-100 py-2">
          Copyright &copy; 2024
        </span>
      </footer>
    </div>
  )
}
