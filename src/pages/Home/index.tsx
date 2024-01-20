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
const Home = () => {
  const restaurante = [
    {
      id: 1,
      titulo: 'Hioki Sushi',
      destaque: true,
      tipo: 'Japonesa',
      avaliacao: '4.6',
      descricao:
        'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
    },
    {
      id: 2,
      titulo: 'La Dolce Vita Trattoria',
      destaque: false,
      tipo: 'italiana',
      avaliacao: '4.9',
      descricao:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
    },
    {
      id: 3,
      titulo: 'La Dolce Vita Trattoria',
      destaque: false,
      tipo: 'italiana',
      avaliacao: '4.9',
      descricao:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
    },
    {
      id: 4,
      titulo: 'La Dolce Vita Trattoria',
      destaque: false,
      tipo: 'italiana',
      avaliacao: '4.9',
      descricao:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
    }
  ]

  return (
    <>
      <Container>
        {restaurante.map((item) => (
          <Card key={item.id}>
            <CardContainer>
              <CardContainerImage>
                <CardImage image="https://placehold.co/304x167" />
                <CardTagContainer>
                  {item.destaque && <Tag>Destaque da semana</Tag>}
                  <Tag>{item.tipo}</Tag>
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

                <p>{item.descricao}</p>

                <Button
                  type="link"
                  variant="primary"
                  to="/restaurante/1"
                  title="Saiba mais"
                >
                  Saiba mais
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
