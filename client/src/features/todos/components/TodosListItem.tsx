import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import { Todo } from '../../../common/api/generated'
import { useNavigate } from 'react-router-dom'

type TodoListItemProps = {
  todo: Todo
}

export default function TodosListItem({ todo }: TodoListItemProps) {
  const navigate = useNavigate()

  return (
    <ListGroup.Item
      action
      className={todo.done ? 'text-decoration-line-through text-muted' : ''}
      onClick={() => navigate(`/todos/${todo._id}`)}
    >
      <div className="d-flex align-items-baseline gap-3">
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
          <Form.Check aria-label="check todo" checked={todo.done} readOnly />
        </div>
        <div>
          <h4>{todo.title}</h4>
          <p className="text-muted fw-light lh-sm">{todo.description}</p>
        </div>
      </div>
    </ListGroup.Item>
  )
}
