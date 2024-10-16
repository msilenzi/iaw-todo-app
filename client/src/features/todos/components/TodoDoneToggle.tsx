import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

type TodoDoneToggleProps = {
  value: boolean
  onChange: (newValue: boolean) => void
  name: string
  idSinTerminar: string
  idTerminado: string
  disabled?: boolean
}

export default function TodoDoneToggle({
  value,
  onChange,
  name,
  idSinTerminar,
  idTerminado,
  disabled,
}: TodoDoneToggleProps) {
  return (
    <ToggleButtonGroup
      type="radio"
      name={name}
      value={+value}
      onChange={(newValue) => onChange(Boolean(newValue))}
    >
      <ToggleButton
        id={idSinTerminar}
        value={0}
        variant="outline-primary"
        disabled={disabled}
      >
        Sin Terminar
      </ToggleButton>
      <ToggleButton
        id={idTerminado}
        value={1}
        variant="outline-primary"
        disabled={disabled}
      >
        Terminado
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
