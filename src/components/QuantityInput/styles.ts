import { styled } from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 0px;

  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    border: 0;
    padding: 5px;
  }

  button svg {
    color: ${(props) => props.theme.purple};

    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    padding-top: 2px;
    color: ${(props) => props.theme['base-title']};
  }
`
