import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../../common/api'
import { CreateTodoDto, Todo } from '../../../common/api/generated'
import CtaBanner from '../../../common/components/CtaBanner'
import Loading from '../../../common/components/Loading'
import formatDate from '../../../common/helpers/formatDate'
import CreateUpdateTodoModal from '../components/CreateUpdateTodoModal'
import TodoDoneEdit from '../components/TodoDoneEdit'

export default function TodoPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(true)
  const [todo, setTodo] = useState<Todo | null>(null)
  const [isEditVisible, setIsEditVisible] = useState(false)

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
    return <Loading />
  }

  if (todo === null) {
    return (
      <CtaBanner
        title="Todo no encontrado"
        description="Lo sentimos, no pudimos encontrar el todo."
        ctaText="Volver al inicio"
        onCtaClick={() => navigate('/')}
      />
    )
  }

  async function handleDelete() {
    setIsLoading(true)
    await api.removeTodo({ id: todo!.id })
    navigate('/')
  }

  async function handleUpdate(newTodo: CreateTodoDto) {
    setIsLoading(true)
    const updatedTodo = await api.updateTodo({
      id: todo!.id,
      updateTodoDto: newTodo,
    })
    setTodo(updatedTodo)
    setIsLoading(false)
  }

  const formattedCreatedAt = formatDate(todo.createdAt)
  const formattedUpdatedAt = formatDate(todo.updatedAt)

  return (
    <>
      <div className="d-flex justify-content-between flex-column flex-md-row">
        <h2 className="m0">{todo.title}</h2>
        <div className="d-flex gap-2">
          <Button variant="primary" onClick={() => setIsEditVisible(true)}>
            <i className="bi bi-pencil-fill"></i>
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            <i className="bi bi-trash-fill"></i>
          </Button>
        </div>
      </div>

      <p className="fw-light text-muted mb-0">Creado el {formattedCreatedAt}</p>
      <p className="fw-light text-muted mb-4">
        Ultima modificación el {formattedUpdatedAt}
      </p>

      <TodoDoneEdit todo={todo} setTodo={setTodo} />

      <section>
        <h4>Descripción</h4>
        <p>{todo.description}</p>
      </section>

      <CreateUpdateTodoModal
        isVisible={isEditVisible}
        onSave={handleUpdate}
        handleClose={() => setIsEditVisible(false)}
        initialTodo={todo}
      />
    </>
  )
}
