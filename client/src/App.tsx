import { Route, Routes } from 'react-router-dom'
import NotFound404Page from './common/pages/NotFound404Page'
import AboutPage from './features/about/pages/AboutPage'
import TodoPage from './features/todos/pages/TodoPage'
import TodosPage from './features/todos/pages/TodosPage'
import MainLayout from './common/layout/MainLayout'
import { useAuth0 } from '@auth0/auth0-react'
import Loading from './common/components/Loading'
import AuthPage from './features/auth/pages/AuthPage'

export default function App() {
  const { isLoading, isAuthenticated } = useAuth0()

  console.log({ isLoading, isAuthenticated })

  if (isLoading) {
    return <Loading />
  }

  if (!isAuthenticated) {
    return <AuthPage />
  }

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<TodosPage />} />
        <Route path="/todos/:id" element={<TodoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound404Page />} />
      </Routes>
    </MainLayout>
  )
}
