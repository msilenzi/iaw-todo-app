import { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { Todo } from '../../../common/api/generated'
import { useApi } from '../../../common/api/useApi'
import TodoDoneToggle from './TodoDoneToggle'

type TodoDoneButtonProps = {
  todo: Todo
  setTodo: React.Dispatch<React.SetStateAction<Todo | null>>
}

export default function TodoDoneEdit({ todo, setTodo }: TodoDoneButtonProps) {
  const [done, setDone] = useState(todo.done)
  const [isLoading, setIsLoading] = useState(false)

  const { todosApi } = useApi()

  async function handleChange(value: boolean) {
    setDone(value)
    setIsLoading(true)

    try {
      const resp = await todosApi!.updateTodo({
        id: todo.id,
        updateTodoDto: { done: value },
      })
      setTodo(resp)
    } catch {
      setTodo(null)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="d-flex align-items-center gap-3 mb-5">
      <TodoDoneToggle
        value={done}
        disabled={isLoading}
        onChange={handleChange}
        name="foo"
        idSinTerminar="st1"
        idTerminado="t1"
      />
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      )}
    </div>
  )
}
