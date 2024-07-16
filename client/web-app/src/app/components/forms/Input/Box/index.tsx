import { XCircle } from 'phosphor-react'
import { Text } from '../../../common/Text'
import { Div } from './style'
import { colors } from '../../../../tokens/colors'

type InputBoxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: 'text' | 'password'
  errorMessage?: string
}

export function InputBox({
  errorMessage,
  type = 'text',
  spellCheck = false,
  ...inputProps
}: InputBoxProps) {
  return (
    <>
      <Div.InputBox>
        <input type={type} spellCheck={spellCheck} {...inputProps} />
      </Div.InputBox>
      {errorMessage ? (
        <div className="flex items-center gap-x-1">
          <XCircle size={16} color={colors['Red-400']} />
          <Text color="Red-400" size="sm" weight="regular">
            {errorMessage}
          </Text>
        </div>
      ) : (
        <span> </span>
      )}
    </>
  )
}
