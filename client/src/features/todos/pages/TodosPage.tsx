import { useEffect, useState } from 'react'
import api from '../../../common/api'
import { Todo } from '../../../common/api/generated'
import TodosList from '../components/TodosList'
import Loading from '../../../common/components/Loading'

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
    return <Loading />
  }

  return (
    <>
      <h2 className="mb-4">Todos</h2>
      <TodosList todos={todos} />
    </>
  )
}
