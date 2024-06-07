import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from 'phosphor-react'

import {
  AdressContainer,
  AdressForm,
  Heading,
  CheckoutContainer,
  InfoContainer,
  PaymentContainer,
  PaymentOptions,
  CartContainer,
  CoffeeList,
  Coffee,
  Divider,
  PriceContainer,
  CheckoutButton,
  CoffeInfo,
} from './styles'

// import { QuantityInput } from '../../components/QuantityInput'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'
import coffeeData from '../../coffee.json'

export function Checkout() {
  const { cart, removeItem } = useContext(CartContext)

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffeeData.find((coffee) => coffee.id === item.id)

    if (!coffeeInfo) {
      throw new Error('Coffee not found')
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  function HandleRemoveItem(ItemId: string) {
    removeItem(ItemId)
  }

  return (
    <CheckoutContainer>
      <InfoContainer>
        <h1>Complete seu pedido</h1>

        <AdressContainer>
          <Heading>
            <MapPin size={24} />
            <div>
              <span>Endereço de Entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </Heading>

          <AdressForm>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </AdressForm>
        </AdressContainer>
        <PaymentContainer>
          <Heading>
            <CurrencyDollar size={24} weight="fill" />
            <div>
              <span>Pagamento</span>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </Heading>
          <PaymentOptions>
            <button>
              <CreditCard size={16} />
              <span>Cartão de Crédito</span>
            </button>
            <button>
              <Bank size={16} />
              <span>Cartão de Débito</span>
            </button>
            <button>
              <Money size={16} />
              <span>Dinheiro</span>
            </button>
          </PaymentOptions>
        </PaymentContainer>
      </InfoContainer>

      <CartContainer>
        <h1>Cafés selecionados</h1>
        <div>
          <CoffeeList>
            {coffeesInCart.map((coffee) => (
              <>
                <Coffee key={coffee.id}>
                  <div>
                    <img src={coffee.image} alt="" />

                    <div>
                      <span>{coffee.title}</span>

                      <CoffeInfo>
                        <button onClick={() => HandleRemoveItem(coffee.id)}>
                          <Trash size={16} />
                          <span>REMOVER</span>
                        </button>
                      </CoffeInfo>
                    </div>
                  </div>
                  <div className="price">
                    <span>{coffee.price}</span>
                  </div>
                </Coffee>
                <Divider />
              </>
            ))}
          </CoffeeList>

          <PriceContainer>
            <div>
              <span>Total de Itens</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </PriceContainer>
          <Link to="/checkout/success">
            <CheckoutButton>
              <span>CONFIRMAR PEDIDO</span>
            </CheckoutButton>
          </Link>
        </div>
      </CartContainer>
    </CheckoutContainer>
  )
}
