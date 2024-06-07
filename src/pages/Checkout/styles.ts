import { styled } from 'styled-components'
import { texts } from '../../styles/texts'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 2rem 0;
  grid-column-gap: 32px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  grid-column: span 3;

  > h1 {
    ${texts.fonts.titleXS}
  }
`
const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const AdressContainer = styled(BaseContainer)``

export const Heading = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    span:first-child {
      ${texts.fonts.textM}
      color: ${(props) => props.theme['base-subtitle']};
    }

    span:last-child {
      ${texts.fonts.textS}
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const AdressForm = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 16px;

  input {
    padding: 12px;
    background: ${(props) => props.theme['base-input']};
    border-radius: 6px;
    border: 0;
  }

  input:nth-child(1) {
    grid-column: span 2;
  }

  input:nth-child(2) {
    grid-column: span 6;
  }

  input:nth-child(3) {
    grid-column: span 2;
  }

  input:nth-child(4) {
    grid-column: span 4;
  }

  input:nth-child(5) {
    grid-column: span 2;
  }

  input:nth-child(6) {
    grid-column: span 3;
  }

  input:nth-child(7) {
    grid-column: span 1;
  }
`

export const PaymentContainer = styled(BaseContainer)``

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  button {
    ${texts.fonts.buttonS}
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 16px;
    border-radius: 6px;

    padding: 12px;
    flex: 1;

    border: 0;
    background: ${(props) => props.theme['base-button']};

    svg {
      margin-top: -2px;
      color: ${(props) => props.theme.purple};
    }

    transition: all 0.2s;

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }

    &:focus {
      box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
    }
  }
`
export const CartContainer = styled.div`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  gap: 12px;

  > h1 {
    ${texts.fonts.titleXS}
  }

  > div {
    padding: 40px;
    background: ${(props) => props.theme['base-card']};
    border-radius: 6px 44px;
  }
`

export const CoffeeList = styled.div`
  display: flex;
  flex-direction: column;
`

export const Coffee = styled.div`
  display: flex;
  gap: 35px;
  border-radius: 6px 20px;

  img {
    height: 64px;
    width: 64px;
  }

  > div {
    display: flex;
    gap: 20px;

    > div {
      display: flex;
      flex-direction: column;
      max-width: 171px;
      gap: 10px;

      > span {
        ${texts.fonts.textM}
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }

  .price {
    ${texts.fonts.textM}
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeInfo = styled.div`
  display: flex;
  gap: 8px;

  button {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 6px 8px;

    background: ${(props) => props.theme['base-button']};
    border: 0;
    border-radius: 6px;

    ${texts.fonts.buttonS}
    color: ${(props) => props.theme['base-text']};

    svg {
      color: ${(props) => props.theme.purple};
    }

    transition: all 0.2s;

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }
`

export const Divider = styled.div`
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  margin: 20px 0;
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;

  div {
    display: flex;
    justify-content: space-between;
    gap: 8px;

    span {
      ${texts.fonts.textS}
      color: ${(props) => props.theme['base-text']};
    }
  }

  div:last-child {
    span {
      ${texts.fonts.textL}
      font-weight: bold;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const CheckoutButton = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.yellow};
  padding: 16px;
  border: 0;
  border-radius: 6px;

  span {
    color: ${(props) => props.theme.white};
  }

  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
