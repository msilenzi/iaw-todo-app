import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router-dom'
import api from '../../../common/api'
import { Todo } from '../../../common/api/generated'
import formatDate from '../../../common/helpers/formatDate'
import LoadingPage from '../../../common/pages/LoadingPage'
import NotFound404Page from '../../../common/pages/NotFound404'
import TodoDoneButton from '../components/TodoDoneButton'

export default function TodoPage() {
  const { id } = useParams()

  const [isLoading, setIsLoading] = useState(true)
  const [todo, setTodo] = useState<Todo | null>(null)

  useEffect(() => {
    ;(async () => {
      if (!id) {
        setIsLoading(false)
        return
      }

      try {
        const resp = await api.findTodoById({ id })
        setTodo(resp)
      } catch {
        setTodo(null)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [id])

  if (isLoading) {
    return <LoadingPage />
  }

  if (todo === null) {
    return (
      <NotFound404Page
        title="Todo no encontrado"
        description="Lo sentimos, no pudimos encontrar el todo"
      />
    )
  }

  const formattedCreatedAt = formatDate(todo.createdAt)
  const formattedUpdatedAt = formatDate(todo.updatedAt)

  return (
    <>
      <div className="d-flex justify-content-between flex-column flex-md-row">
        <h2 className="m0">{todo.title}</h2>
        <div className="d-flex gap-2">
          <Button variant="primary">
            <i className="bi bi-pencil-fill"></i>
          </Button>
          <Button variant="danger">
            <i className="bi bi-trash-fill"></i>
          </Button>
        </div>
      </div>

      <p className="fw-light text-muted mb-0">Creado el {formattedCreatedAt}</p>
      <p className="fw-light text-muted mb-4">
        Ultima modificación el {formattedUpdatedAt}
      </p>

      <TodoDoneButton todo={todo} setTodo={setTodo} />

      <section>
        <h4>Descripción</h4>
        <p>{todo.description}</p>
      </section>
    </>
  )
}
