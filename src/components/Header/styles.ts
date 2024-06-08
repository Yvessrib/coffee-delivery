import { styled } from 'styled-components'
import { texts } from '../../styles/texts'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 32px 0;
`

export const MenuContainer = styled.nav`
  display: flex;
  gap: 1.5rem;
`

export const LocationButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 4px;

  font-size: 14px;

  color: ${(props) => props.theme['purple-dark']};
  background-color: ${(props) => props.theme['purple-light']};

  border: 0;
  border-radius: 6px;

  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['purple-light']};
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;

  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};

  border: 0;
  border-radius: 6px;

  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme['yellow-light']};
  }

  span {
    ${texts.fonts.textS}
    font-weight: bold;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['yellow-dark']};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 30px;
    right: 85px;
  }
`
