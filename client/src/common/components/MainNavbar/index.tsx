import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, useLocation } from 'react-router-dom'
import NavbarUser from './NavbarUser'

const mainNavbarLinks = [
  { displayName: 'Todos', url: '/' },
  { displayName: 'About', url: '/about' },
]

export default function MainNavbar() {
  const location = useLocation()

  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-5">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Todo App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {mainNavbarLinks.map(({ displayName, url }) => (
              <Nav.Link
                as={Link}
                to={url}
                active={location.pathname === url}
                key={url}
              >
                {displayName}
              </Nav.Link>
            ))}
          </Nav>
          <NavbarUser />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
