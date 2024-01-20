import { CardContainer } from './styles'

type Props = {
  children: JSX.Element
}

const Card = ({ children }: Props) => <CardContainer>{children}</CardContainer>

export default Card
