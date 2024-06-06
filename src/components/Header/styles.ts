import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 104px;
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
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;

  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};

  border: 0;
  border-radius: 6px;
`
