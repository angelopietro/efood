import { Cardapio } from '../pages/Home'

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getTotalPrice = (items: Cardapio[]) => {
  return items.reduce((acumulador, valorAtual) => {
    return (acumulador += valorAtual.preco!)
  }, 0)
}
