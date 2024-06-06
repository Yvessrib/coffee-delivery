import CoffeLogo from '../../assets/CoffeDeliveryLogo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  CartButton,
  HeaderContainer,
  LocationButton,
  MenuContainer,
} from './styles'
export function Header() {
  return (
    <HeaderContainer>
      <img src={CoffeLogo} alt="" />

      <MenuContainer>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </LocationButton>
        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </MenuContainer>
    </HeaderContainer>
  )
}
