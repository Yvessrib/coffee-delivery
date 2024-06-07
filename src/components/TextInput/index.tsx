import { Container } from './styles'

export function TextInput(placeholder: string, optional: boolean = false) {
  return (
    <Container>
      <input type="text" placeholder={placeholder} />

      {optional ? <span>Optional</span> : null}
    </Container>
  )
}
