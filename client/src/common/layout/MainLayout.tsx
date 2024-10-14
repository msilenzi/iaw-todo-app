import { ReactNode } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <MainNavbar />
      <Container className="flex-grow-1 mb-5">{children}</Container>
      <MainFooter />
    </div>
  )
}

function MainNavbar() {
  return (
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
  )
}

function MainFooter() {
  return (
    <footer>
      <span className="text-center text-muted d-inline-block w-100 py-2">
        Copyright &copy; 2024
      </span>
    </footer>
  )
}
