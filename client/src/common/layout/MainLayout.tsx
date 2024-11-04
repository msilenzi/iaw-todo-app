import { ReactNode } from 'react'
import Container from 'react-bootstrap/Container'
import MainNavbar from '../components/MainNavbar'

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

function MainFooter() {
  return (
    <footer>
      <span className="text-center text-muted d-inline-block w-100 py-2">
        Copyright &copy; 2024
      </span>
    </footer>
  )
}
