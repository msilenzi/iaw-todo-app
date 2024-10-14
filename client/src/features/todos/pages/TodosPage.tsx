import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function TodosPage() {
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
        <h2 className="mb-4">Todos</h2>

        <ListGroup variant="flush">
          <ListGroup.Item action className="todo-item">
            <div className="d-flex align-items-baseline gap-3">
              <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                <Form.Check aria-label="check todo" checked={false} readOnly />
              </div>
              <div>
                <h4>Lorem ipsum</h4>
                <p className="text-muted fw-light lh-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate illum voluptas.
                </p>
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item
            action
            className="todo-item text-decoration-line-through text-muted"
          >
            <div className="d-flex align-items-baseline gap-3">
              <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                <Form.Check aria-label="check todo" checked={true} readOnly />
              </div>
              <div>
                <h4>Lorem ipsum</h4>
                <p className="text-muted fw-light lh-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate illum voluptas, tenetur excepturi inventore commodi
                  labore eos qui quisquam repellendus unde ullam assumenda
                  recusandae. Officia quam hic porro rerum quidem?
                </p>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Container>

      <footer>
        <span className="text-center text-muted d-inline-block w-100 py-2">
          Copyright &copy; 2024
        </span>
      </footer>
    </div>
  )
}
