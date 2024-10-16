import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Stack from 'react-bootstrap/Stack'
import { CreateTodoDto, Todo } from '../../../common/api/generated'
import TodoDoneToggle from './TodoDoneToggle'

type CreateTodoModalProps = {
  isVisible: boolean
  handleClose: () => void
  onSave: (newTodo: CreateTodoDto) => void
  initialTodo?: Todo
}

function CreateTodoModal({
  isVisible,
  handleClose,
  onSave,
  initialTodo,
}: CreateTodoModalProps) {
  const [title, setTitle] = useState<string>(initialTodo?.title ?? '')
  const [description, setDescription] = useState<string>(
    initialTodo?.description ?? ''
  )
  const [done, setDone] = useState<boolean>(initialTodo?.done ?? false)

  const handleSubmit = () => {
    const newTodo: CreateTodoDto = { title, description, done }
    onSave(newTodo)
    handleClose()
  }

  const modalTitle = initialTodo ? 'Editar Todo' : 'Crear nuevo Todo'
  const isFormValid = title.trim() !== '' && description.trim() !== ''

  return (
    <Modal show={isVisible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={4}>
            <Form.Group controlId="todoTitle">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                isInvalid={title.trim() === ''}
              />
              <Form.Control.Feedback type="invalid">
                El título es obligatorio.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="todoDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                isInvalid={description.trim() === ''}
              />
              <Form.Control.Feedback type="invalid">
                La descripción es obligatoria.
              </Form.Control.Feedback>
            </Form.Group>

            <TodoDoneToggle
              value={done}
              onChange={(value) => setDone(value)}
              name="modalToggleDone"
              idSinTerminar="modalSinTerminar"
              idTerminado="modalTerminado"
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-secondary"
          className="border-0"
          onClick={handleClose}
        >
          Cancelar
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          {initialTodo ?
            <>
              Actualizar <i className="bi bi-pencil-fill"></i>
            </>
          : <>
              Crear <i className="bi bi-plus-lg"></i>
            </>
          }
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateTodoModal
