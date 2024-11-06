import ListGroup from 'react-bootstrap/ListGroup'
import { Todo } from '../../../common/api/generated'
import TodosListItem from './TodosListItem'

type TodosListProps = {
  todos: Todo[]
}

export default function TodosList({ todos }: TodosListProps) {
  return (
    <ListGroup variant="flush">
      {todos.map((todo) => (
        <TodosListItem todo={todo} key={todo._id} />
      ))}
    </ListGroup>
  )
}
