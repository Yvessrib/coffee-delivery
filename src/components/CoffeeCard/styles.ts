import { styled } from 'styled-components'
import { texts } from '../../styles/texts'

export const CoffeeCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 6px 36px;
  width: 256px;
  padding: 0 20px 20px;

  justify-content: center;
  text-align: center;

  background: ${(props) => props.theme['base-card']};
`

export const CoffeImg = styled.img`
  max-width: 120px;
  max-height: 120px;
  align-self: center;
  margin-top: -20px;
`

export const Tags = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 4px;
  justify-content: center;

  span {
    ${texts.fonts.tag}
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    padding: 4px 8px;
    border-radius: 6px;
  }
`

export const Title = styled.span`
  margin-top: 16px;

  ${texts.fonts.titleS}
  color: ${(props) => props.theme['base-subtitle']};
`

export const Description = styled.span`
  margin-top: 8px;

  ${texts.fonts.textS}
  color: ${(props) => props.theme['base-label']};
`

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  color: ${(props) => props.theme['base-text']};

  span:first-child {
    ${texts.fonts.textS}
  }

  span:last-child {
    ${texts.fonts.titleM}
  }
`

interface OrderProps {
  itemAdded?: boolean
}

export const Order = styled.div<OrderProps>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    display: flex;
    background-color: ${(props) => props.theme['purple-dark']};
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 8px;

    border: 0;

    &:hover {
      background-color: ${(props) => props.theme.purple};
    }
  }
`
