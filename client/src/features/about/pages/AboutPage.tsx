import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Stack from 'react-bootstrap/Stack'

export default function AboutPage() {
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
        <h2 className="mb-5">Acerca de la Aplicación de "Todos"</h2>

        <Stack gap={4}>
          <section>
            <h3 className="mb-3">¿Qué es esta aplicación?</h3>
            <p>
              Esta es una aplicación básica de gestión de tareas (también
              conocida como "todos"), diseñada para ayudarte a organizar tus
              actividades. Con esta aplicación, puedes agregar tareas, ver una
              lista de todas ellas, marcarlas como completadas o eliminarlas si
              ya no son necesarias.
            </p>
          </section>

          <section>
            <h3 className="mb-3">¿Por qué usar una aplicación de "todos"?</h3>
            <p>
              Las aplicaciones de "todos" son herramientas sencillas pero
              poderosas que permiten:
            </p>
            <ul>
              <li>Mantener un seguimiento claro de las tareas pendientes.</li>
              <li>
                Aumentar la productividad al tener un plan de acción claro.
              </li>
              <li>
                Priorizar tareas importantes y delegar otras menos urgentes.
              </li>
              <li>Organizar tanto proyectos personales como profesionales.</li>
            </ul>
          </section>

          <section>
            <h3 className="mb-3">¿Qué podés hacer con esta aplicación?</h3>
            <ol>
              <li>
                <strong>Agregar nuevas tareas:</strong> Puedes crear un nuevo
                "todo" con solo escribir la descripción de la tarea y añadirla a
                la lista.
              </li>
              <li>
                <strong>Marcar tareas como completadas:</strong> Una vez que
                termines una tarea, puedes marcarla como completada para llevar
                un registro
              </li>
              de lo que ya has hecho.
              <li>
                <strong>Eliminar tareas:</strong> Si ya no necesitas realizar
                una tarea, puedes eliminarla fácilmente.
              </li>
            </ol>
          </section>
        </Stack>
      </Container>

      <footer>
        <span className="text-center text-muted d-inline-block w-100 py-2">
          Copyright &copy; 2024
        </span>
      </footer>
    </div>
  )
}
