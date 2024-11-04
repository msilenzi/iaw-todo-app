import { useAuth0 } from '@auth0/auth0-react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function NavbarUser() {
  const { user, isLoading, logout, loginWithRedirect } = useAuth0()

  if (isLoading) return null

  if (!user) {
    return (
      <Nav>
        <Nav.Link onClick={() => loginWithRedirect()}>Iniciar sesión</Nav.Link>
      </Nav>
    )
  }

  return (
    <Nav>
      <NavDropdown title={user.name}>
        <NavDropdown.Item
          className="d-flex justify-content-between text-danger"
          onClick={() =>
            logout({
              logoutParams: { returnTo: window.location.origin },
            })
          }
        >
          <span>Cerrar sesión</span>
          <i className="bi bi-box-arrow-right"></i>
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  )
}
