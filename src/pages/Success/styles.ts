import { styled } from 'styled-components'
import { texts } from '../../styles/texts'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  gap: 40px;
`

export const SuccessHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span:first-child {
    ${texts.fonts.titleL}
    color: ${(props) => props.theme['yellow-dark']}
  }

  span:last-child {
    ${texts.fonts.textL}
    color: ${(props) => props.theme['base-subtitle']}
  }
`

export const SuccessContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 80px;
`

export const SuccessDetails = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  border-radius: 6px 36px;
  overflow: hidden; /* Para garantir que o conteúdo não transborde o border-radius */

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit; /* Inherita o border-radius do elemento principal */
    padding: 1px; /* Largura da borda */
    background: linear-gradient(
      to right,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`

export const DetailsCard = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  img {
    width: 32px;
    height: 32px;
  }
`
