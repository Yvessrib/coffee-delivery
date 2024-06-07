import { styled } from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  gap: 2px;

  padding: 6p 8px;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    border: 0;
  }

  button svg {
    color: ${(props) => props.theme.purple};

    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    padding-top: 7px;
    color: ${(props) => props.theme['base-title']};
  }
`
