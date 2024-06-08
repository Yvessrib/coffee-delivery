import { styled } from 'styled-components'
import { texts } from '../../styles/texts'

export const RadioContainer = styled.label`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  text-transform: uppercase;
  ${texts.fonts.buttonS};
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${(props) => props.theme['purple-light']};
    border-color: ${(props) => props.theme.purple};
  }

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`
