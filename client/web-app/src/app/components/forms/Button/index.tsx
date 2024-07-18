import { ButtonStyle, ButtonVariant } from './styles'
import { Text } from '../../common/Text'
import { Loading } from '../Loading'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  type?: 'submit' | 'reset' | 'button'
  variant?: ButtonVariant
  isSubmitting?: boolean
}

export function Button({
  children,
  type = 'button',
  variant = 'default',
  isSubmitting = false,
  ...props
}: ButtonProps) {
  return (
    <ButtonStyle
      type={type}
      variant={variant}
      disabled={isSubmitting}
      {...props}
    >
      <Text color="Black-300" weight="bold">
        {isSubmitting ? <Loading /> : children}
      </Text>
    </ButtonStyle>
  )
}
