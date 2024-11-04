import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './common/components/ProtectedRoute'
import MainLayout from './common/layout/MainLayout'
import NotFound404Page from './common/pages/NotFound404Page'
import AboutPage from './features/about/pages/AboutPage'
import TodoPage from './features/todos/pages/TodoPage'
import TodosPage from './features/todos/pages/TodosPage'

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<TodosPage />} />
          <Route path="/todos/:id" element={<TodoPage />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound404Page />} />
      </Routes>
    </MainLayout>
  )
}
