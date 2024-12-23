import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { CreateTodoDto, Todo } from '../../../common/api/generated'
import Loading from '../../../common/components/Loading'
import CreateUpdateTodoModal from '../components/CreateUpdateTodoModal'
import TodosList from '../components/TodosList'
import CtaBanner from '../../../common/components/CtaBanner'
import { useApi } from '../../../common/api/useApi'

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isCreateVisible, setIsCreateVisible] = useState(false)

  const { todosApi } = useApi()

  useEffect(() => {
    ;(async () => {
      const resp = await todosApi!.findAllTodos()
      setTodos(resp.data)
      setIsLoading(false)
    })()
  }, [todosApi])

  async function handleCreateTodo(newTodo: CreateTodoDto) {
    setIsLoading(true)
    const savedTodo = await todosApi!.createTodo(newTodo)
    setTodos((prevTodos) => [...prevTodos, savedTodo.data])
    setIsLoading(false)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h2>Todos</h2>
        <Button onClick={() => setIsCreateVisible(true)}>
          <i className="bi bi-plus-lg"></i> Agregar Todo
        </Button>
      </div>
      {todos.length === 0 && (
        <div className="mt-5">
          <CtaBanner
            title="No se encontraron Todos"
            description="Parece que todavía no tenés Todos creados. No te preocupes, podés crear uno ahora."
            ctaText="Crear nuevo Todo"
            icon="bi bi-inbox"
            onCtaClick={() => setIsCreateVisible(true)}
          />
        </div>
      )}
      <TodosList todos={todos} />
      <CreateUpdateTodoModal
        isVisible={isCreateVisible}
        onSave={handleCreateTodo}
        handleClose={() => setIsCreateVisible(false)}
      />
    </>
  )
}
