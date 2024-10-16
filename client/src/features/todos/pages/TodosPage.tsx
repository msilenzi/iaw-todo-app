import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import api from '../../../common/api'
import { CreateTodoDto, Todo } from '../../../common/api/generated'
import Loading from '../../../common/components/Loading'
import CreateTodoModal from '../components/CreateTodoModal'
import TodosList from '../components/TodosList'

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isCreateTodoModalVisible, setIsCreateTodoModalVisible] =
    useState(false)

  useEffect(() => {
    ;(async () => {
      const resp = await api.findAllTodos()
      setTodos(resp)
      setIsLoading(false)
    })()
  }, [])

  async function handleCreateTodo(newTodo: CreateTodoDto) {
    setIsLoading(true)
    const savedTodo = await api.createTodo({ createTodoDto: newTodo })
    setTodos((prevTodos) => [...prevTodos, savedTodo])
    setIsLoading(false)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="mb-4">Todos</h2>
        <Button onClick={() => setIsCreateTodoModalVisible(true)}>
          <i className="bi bi-plus-lg"></i> Agregar Todo
        </Button>
      </div>
      <TodosList todos={todos} />
      <CreateTodoModal
        isVisible={isCreateTodoModalVisible}
        onSave={handleCreateTodo}
        handleClose={() => setIsCreateTodoModalVisible(false)}
      />
    </>
  )
}
