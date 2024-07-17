import { XCircle } from 'phosphor-react'
import { Text } from '../../../common/Text'
import { Div } from './style'
import { colors } from '../../../../tokens/colors'
import { forwardRef } from 'react'

type InputBoxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: 'text' | 'password'
  errorMessage?: string
}

export const InputBox = forwardRef<HTMLInputElement, InputBoxProps>(
  ({ errorMessage, type = 'text', spellCheck = false, ...inputProps }, ref) => {
    return (
      <>
        <Div.InputBox>
          <input
            ref={ref}
            type={type}
            spellCheck={spellCheck}
            {...inputProps}
          />
        </Div.InputBox>
        {errorMessage && (
          <div className="flex items-center gap-x-1">
            <XCircle size={16} color={colors['Red-400']} />
            <Text color="Red-400" size="sm" weight="regular">
              {errorMessage}
            </Text>
          </div>
        )}
      </>
    )
  },
)
