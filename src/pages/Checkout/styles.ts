import { styled } from 'styled-components'
import { texts } from '../../styles/texts'

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 32px;
  padding: 40px 20px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  > h1 {
    ${texts.fonts.titleXS}
  }
`
const BaseContainer = styled.div`
  padding: 40px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
  width: 100%;
  min-width: 640px;

  display: flex;
  flex-direction: column;
  gap: 32px;
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
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`

export const PaymentContainer = styled(BaseContainer)``

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
`
export const CartContainer = styled.div`
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
  gap: 20px;
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
