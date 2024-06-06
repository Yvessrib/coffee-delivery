// import { Timer, ShoppingCart, Package, Coffee } from 'phosphor-react'
import heroImg from '../../assets/hero_img.svg'
import {
  CoffeeList,
  HeroContainer,
  HeroHead,
  HeroInfo,
  HeroPros,
} from './styles'
import Icon from '../../assets/icons/Icon.png'
import Icon1 from '../../assets/icons/Icon-1.png'
import Icon2 from '../../assets/icons/Icon-2.png'
import Icon3 from '../../assets/icons/Icon-3.png'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Home() {
  return (
    <>
      <HeroContainer>
        <HeroInfo>
          <HeroHead>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora
            </p>
          </HeroHead>
          <HeroPros>
            <div>
              <div>
                {/* <ShoppingCart
                size={16}
                weight="fill"
                color="#C47F17"
                style={{ backgroundColor: '#F1E9C9' }}
              /> */}
                <img src={Icon} alt="" />
              </div>
              <p>Compra simples e segura</p>
            </div>

            <div>
              {/* <Package size={16} weight="fill" /> */}
              <img src={Icon2} alt="" />
              <p>Embalagem mantém o café intacto</p>
            </div>

            <div>
              {/* <Timer size={16} weight="fill" /> */}
              <img src={Icon1} alt="" />
              <p>Entrega rápida e rastreada</p>
            </div>

            <div>
              {/* <Coffee size={16} weight="fill" /> */}
              <img src={Icon3} alt="" />
              <p>O café chega fresquinho até você</p>
            </div>
          </HeroPros>
        </HeroInfo>
        <img src={heroImg} alt="" />
      </HeroContainer>
      <CoffeeList>
        <h1>Nossos cafés</h1>

        <div>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </div>
      </CoffeeList>
    </>
  )
}
