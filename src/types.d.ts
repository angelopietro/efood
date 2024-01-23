declare type PropsCard = {
  image: string
}

declare type restaurantDetail = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ProductMenu[]
}

declare type ProductMenu = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type PurchasePayload = {
  products: Product[]
  delivery: Delivery
  payment: Payment
}

declare type Delivery = {
  receiver: string
  address: Address
}

declare type Address = {
  description: string
  city: string
  zipCode: string
  number: number
  complement: string
}

declare type Payment = {
  card: Card
}

declare type Card = {
  name: string
  number: string
  code: number
  expires: Expires
}

declare type Expires = {
  month: number
  year: number
}

declare type Product = {
  id: number
  price: number
}

declare type PurchaseResponse = {
  orderId: string
}

declare type UserAddress = {
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
}

declare type userCard = {
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

declare type CheckoutStep = {
  step: string
}

declare type CartState = {
  items: Cardapio[]
  isOpen: boolean
  userAddress: UserAddress
  userCard: userCard
  currentCheckoutStep: CheckoutStep
}
