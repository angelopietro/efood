import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none'
  children: string
}

const Tag = ({ children, size = 'small', transform = 'none' }: Props) => (
  <TagContainer size={size} transform={transform}>
    {children}
  </TagContainer>
)

export default Tag
