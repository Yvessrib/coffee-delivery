import CoffeLogo from '../../assets/CoffeDeliveryLogo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  CartButton,
  HeaderContainer,
  LocationButton,
  MenuContainer,
} from './styles'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
export function Header() {
  const { cart } = useContext(CartContext)

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
        <Link to="/checkout" aria-disabled={cart.length === 0}>
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
            {cart.length > 0 ? <span>{cart.length}</span> : null}
          </CartButton>
        </Link>
      </MenuContainer>
    </HeaderContainer>
  )
}
