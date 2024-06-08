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

import { CartContext } from '../../contexts/CartContext'
import React, { useContext } from 'react'
import coffeeData from '../../coffee.json'
import { QuantityInput } from '../../components/QuantityInput'
import { Radio } from '../../components/RadioInput'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TextInput } from '../../components/TextInput'

interface FormInputs {
  cep: number
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrderFormValidationSchema = zod.object({
  cep: zod.number({ invalid_type_error: 'Informe o CEP' }),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  fullAddress: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe o estado'),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe o método de pagamento',
  }),
})

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const {
    cart,
    removeItem,
    decrementItemQuantity,
    incrementItemQuantity,
    checkoutOrder,
  } = useContext(CartContext)

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffeeData.find((coffee) => coffee.id === item.id)

    if (!coffeeInfo) {
      throw new Error('Café não encontrado')
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  const shippingPrice = 3.5

  const totalItemPrice = coffeesInCart.reduce(
    (previousValue: number, currentItem) => {
      return (previousValue += currentItem.price * currentItem.quantity)
    },
    0,
  )

  function HandleRemoveItem(ItemId: string) {
    if (cart.length === 1) {
      alert('O carrinho precisa ter ao menos um item!')
    } else {
      removeItem(ItemId)
    }
  }

  function HandleIncrementItemQuantity(ItemId: string) {
    incrementItemQuantity(ItemId)
  }

  function HandleDecrementItemQuantity(ItemId: string) {
    decrementItemQuantity(ItemId)
  }

  const { register, handleSubmit, watch } = useForm<FormInputs>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  const selectedPaymentMethod = watch('paymentMethod')

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }

    console.log(data)

    checkoutOrder(data)
  }

  return (
    <CheckoutContainer>
      <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
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
              <TextInput
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: 'cep' } }}
                {...register('cep', { valueAsNumber: true })}
              />

              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
                {...register('street')}
              />

              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
                {...register('number')}
              />

              <TextInput
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'fullAddress' } }}
                {...register('fullAddress')}
              />

              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                {...register('neighborhood')}
              />

              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
                {...register('city')}
              />

              <TextInput
                placeholder="UF"
                maxLength={2}
                containerProps={{ style: { gridArea: 'state' } }}
                {...register('state')}
              />
            </AdressForm>
          </AdressContainer>
          <PaymentContainer>
            <Heading>
              <CurrencyDollar size={24} weight="fill" />
              <div>
                <span>Pagamento</span>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </Heading>
            <PaymentOptions>
              <Radio
                isSelected={selectedPaymentMethod === 'credit'}
                value="credit"
                {...register('paymentMethod')}
              >
                <CreditCard size={16} />
                <span>Cartão de Crédito</span>
              </Radio>

              <Radio
                isSelected={selectedPaymentMethod === 'debit'}
                value="debit"
                {...register('paymentMethod')}
              >
                <Bank size={16} />
                <span>Cartão de Débito</span>
              </Radio>

              <Radio
                isSelected={selectedPaymentMethod === 'cash'}
                value="cash"
                {...register('paymentMethod')}
              >
                <Money size={16} />
                <span>Dinheiro</span>
              </Radio>
            </PaymentOptions>
          </PaymentContainer>
        </InfoContainer>
      </form>

      <CartContainer>
        <h1>Cafés selecionados</h1>
        <div>
          <CoffeeList>
            {coffeesInCart.map((coffee) => (
              <React.Fragment key={coffee.id}>
                <Coffee>
                  <div>
                    <img src={coffee.image} alt="" />

                    <div>
                      <span>{coffee.title}</span>

                      <CoffeInfo>
                        <QuantityInput
                          decrementQuantity={() =>
                            HandleDecrementItemQuantity(coffee.id)
                          }
                          incrementQuantity={() =>
                            HandleIncrementItemQuantity(coffee.id)
                          }
                          quantity={coffee.quantity}
                        />
                        <button onClick={() => HandleRemoveItem(coffee.id)}>
                          <Trash size={16} />
                          <span>REMOVER</span>
                        </button>
                      </CoffeInfo>
                    </div>
                  </div>
                  <div className="price">
                    <span>R$ {coffee.price}</span>
                  </div>
                </Coffee>
                <Divider />
              </React.Fragment>
            ))}
          </CoffeeList>

          <PriceContainer>
            <div>
              <span>Total de Itens</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemPrice)}
              </span>
            </div>
            <div>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(shippingPrice)}
              </span>
            </div>
            <div>
              <span>Total</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItemPrice + shippingPrice)}
              </span>
            </div>
          </PriceContainer>

          <CheckoutButton type="submit" form="order">
            <span>CONFIRMAR PEDIDO</span>
          </CheckoutButton>
        </div>
      </CartContainer>
    </CheckoutContainer>
  )
}
