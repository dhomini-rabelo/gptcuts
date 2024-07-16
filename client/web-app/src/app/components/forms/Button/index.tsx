import { ButtonStyle } from './styles'
import { Text } from '../../common/Text'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  type?: 'submit' | 'reset' | 'button'
}

export function Button({ children, type = 'button', ...props }: ButtonProps) {
  return (
    <ButtonStyle type={type} {...props}>
      <Text color="Black-200">{children}</Text>
    </ButtonStyle>
  )
}
