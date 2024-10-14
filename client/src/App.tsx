import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound404 from './common/pages/NotFound404'
import AboutPage from './features/about/pages/AboutPage'
import TodoPage from './features/todos/pages/TodoPage'
import TodosPage from './features/todos/pages/TodosPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/todos" />} />
      <Route path="/todos/" element={<TodosPage />} />
      <Route path="/todos/:id" element={<TodoPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  )
}
