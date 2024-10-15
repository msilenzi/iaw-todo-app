import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

type TodoDoneToggleProps = {
  value: boolean
  onChange: (newValue: boolean) => void
  disabled?: boolean
}

export default function TodoDoneToggle({
  value,
  onChange,
  disabled,
}: TodoDoneToggleProps) {
  function handleChange(newValue: number) {
    onChange(Boolean(newValue))
  }

  return (
    <ToggleButtonGroup
      type="radio"
      name="options"
      value={+value}
      onChange={handleChange}
    >
      <ToggleButton
        id="sin-terminar"
        value={0}
        variant="outline-primary"
        disabled={disabled}
      >
        Sin Terminar
      </ToggleButton>
      <ToggleButton
        id="terminado"
        value={1}
        variant="outline-primary"
        disabled={disabled}
      >
        Terminado
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
