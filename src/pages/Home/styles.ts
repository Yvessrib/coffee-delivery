import { styled } from 'styled-components'
import { texts } from '../../styles/texts'

export const HeroContainer = styled.div`
  display: flex;
  padding: 2rem 0;
  gap: 3rem;
`

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const HeroHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    ${texts.fonts.titleXL}
  }

  p {
    ${texts.fonts.textL}
  }
`

export const HeroPros = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    p {
      ${texts.fonts.textM}
    }
  }
`

export const CoffeeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 54px;

  padding: 32px 0px;

  h1 {
    ${texts.fonts.titleXL}
    color: ${(props) => props.theme['base-subtitle']}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
`
