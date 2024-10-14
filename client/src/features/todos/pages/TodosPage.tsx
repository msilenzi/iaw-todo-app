import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'

export default function TodosPage() {
  return (
    <>
      <h2 className="mb-4">Todos</h2>

      <ListGroup variant="flush">
        <ListGroup.Item action className="todo-item">
          <div className="d-flex align-items-baseline gap-3">
            <div className="d-flex flex-column justify-content-center align-items-center gap-2">
              <Form.Check aria-label="check todo" checked={false} readOnly />
            </div>
            <div>
              <h4>Lorem ipsum</h4>
              <p className="text-muted fw-light lh-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate illum voluptas.
              </p>
            </div>
          </div>
        </ListGroup.Item>

        <ListGroup.Item
          action
          className="todo-item text-decoration-line-through text-muted"
        >
          <div className="d-flex align-items-baseline gap-3">
            <div className="d-flex flex-column justify-content-center align-items-center gap-2">
              <Form.Check aria-label="check todo" checked={true} readOnly />
            </div>
            <div>
              <h4>Lorem ipsum</h4>
              <p className="text-muted fw-light lh-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate illum voluptas, tenetur excepturi inventore commodi
                labore eos qui quisquam repellendus unde ullam assumenda
                recusandae. Officia quam hic porro rerum quidem?
              </p>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </>
  )
}
