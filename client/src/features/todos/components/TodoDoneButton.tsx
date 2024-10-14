import { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import api from '../../../common/api'
import { Todo } from '../../../common/api/generated'

type TodoDoneButtonProps = {
  todo: Todo
  setTodo: React.Dispatch<React.SetStateAction<Todo | null>>
}

export default function TodoDoneButton({ todo, setTodo }: TodoDoneButtonProps) {
  const [done, setDone] = useState(todo.done)
  const [isLoading, setIsLoading] = useState(false)

  async function handleChange(value: number) {
    const newDoneValue = Boolean(value)
    setDone(newDoneValue)
    setIsLoading(true)

    try {
      const resp = await api.updateTodo({
        id: todo.id,
        updateTodoDto: { done: newDoneValue },
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
      <ToggleButtonGroup
        type="radio"
        name="options"
        value={+done}
        onChange={handleChange}
      >
        <ToggleButton
          id="sin-terminar"
          value={0}
          variant="outline-primary"
          disabled={isLoading}
        >
          Sin Terminar
        </ToggleButton>
        <ToggleButton
          id="terminado"
          value={1}
          variant="outline-primary"
          disabled={isLoading}
        >
          Terminado
        </ToggleButton>
      </ToggleButtonGroup>
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      )}
    </div>
  )
}
