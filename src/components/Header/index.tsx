import CoffeLogo from '../../assets/CoffeDeliveryLogo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  CartButton,
  HeaderContainer,
  LocationButton,
  MenuContainer,
} from './styles'
import { Link } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={CoffeLogo} alt="" />
      </Link>

      <MenuContainer>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </LocationButton>
        <Link to="/checkout">
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </Link>
      </MenuContainer>
    </HeaderContainer>
  )
}
