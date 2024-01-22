import { Container } from './styles'

export type PropsBanner = {
  picture: string
  type: string
  title: string
}

const Banner = ({ picture, type, title }: PropsBanner) => {
  return (
    <>
      <Container style={{ backgroundImage: `url(${picture})` }}>
        <div className="container">
          <h2>{type}</h2>
          <h3>{title}</h3>
        </div>
      </Container>
    </>
  )
}

export default Banner
