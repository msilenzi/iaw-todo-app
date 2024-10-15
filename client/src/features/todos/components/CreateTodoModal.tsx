import { useState } from 'react'
import {
  Modal,
  Button,
  Form,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from 'react-bootstrap'
import { CreateTodoDto } from '../../../common/api/generated'

type CreateTodoModalProps = {
  isVisible: boolean
  handleClose: () => void
  onCreateTodo: (newTodo: CreateTodoDto) => void
}

function CreateTodoModal({
  isVisible,
  handleClose,
  onCreateTodo,
}: CreateTodoModalProps) {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [done, setDone] = useState<boolean>(false)

  const handleDoneChange = (value: number) => {
    setDone(value === 1)
  }

  const handleSubmit = () => {
    const newTodo: CreateTodoDto = {
      title,
      description,
      done,
    }
    onCreateTodo(newTodo)
    handleClose()
  }

  const isFormValid = title.trim() !== '' && description.trim() !== ''

  return (
    <Modal show={isVisible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Crear nuevo Todo</Modal.Title>
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

            <ToggleButtonGroup
              type="radio"
              name="options"
              value={done ? 1 : 0}
              onChange={handleDoneChange}
            >
              <ToggleButton
                id="sin-terminar"
                value={0}
                variant="outline-primary"
              >
                Sin Terminar
              </ToggleButton>
              <ToggleButton id="terminado" value={1} variant="outline-primary">
                Terminado
              </ToggleButton>
            </ToggleButtonGroup>
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
          <i className="bi bi-plus-lg"></i> Crear
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateTodoModal
