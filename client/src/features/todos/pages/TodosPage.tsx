import { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import api from '../../../common/api'
import { Todo } from '../../../common/api/generated'
import TodosList from '../components/TodosList'

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const resp = await api.findAllTodos()
      setTodos(resp)
      setIsLoading(false)
    })()
  }, [])

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </div>
    )
  }

  return (
    <>
      <h2 className="mb-4">Todos</h2>
      <TodosList todos={todos} />
    </>
  )
}
