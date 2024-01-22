import { useEffect, useState } from 'react'
import imagemEstrela from '../../assets/images/ico_estrela.svg'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Tag from '../../components/Tag'
import {
  CardContainer,
  CardContainerImage,
  CardContentHeader,
  CardContentRestaurant,
  CardImage,
  CardTagContainer,
  Container,
  Rating,
  RatingIcon,
  Title
} from './styles'
import { useGetRestaurantsQuery } from '../../services/api'

export type RestauranteDetalhe = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantsQuery()

  if (!restaurantes) {
    return <>Carregando...</>
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 195) {
      return descricao.slice(0, 192) + '...'
    }
    return descricao
  }

  return (
    <>
      <Container>
        {restaurantes.map((item) => (
          <Card key={item.id}>
            <CardContainer>
              <CardContainerImage>
                <CardImage image={item.capa} />
                <CardTagContainer>
                  {item.destacado && <Tag>Destaque da semana</Tag>}
                  <Tag transform="capitalize">{item.tipo}</Tag>
                </CardTagContainer>
              </CardContainerImage>

              <CardContentRestaurant>
                <CardContentHeader>
                  <Title>{item.titulo}</Title>
                  <Rating>
                    <Title>{item.avaliacao}</Title>
                    <RatingIcon
                      src={imagemEstrela}
                      alt={`Avaliação ${item.avaliacao}`}
                    />
                  </Rating>
                </CardContentHeader>

                <p>{getDescricao(item.descricao)}</p>

                <Button
                  type="link"
                  variant="primary"
                  to={'/restaurante/' + item.id}
                  title="Saiba mais"
                >
                  <>Saiba mais</>
                </Button>
              </CardContentRestaurant>
            </CardContainer>
          </Card>
        ))}
      </Container>
    </>
  )
}

export default Home
