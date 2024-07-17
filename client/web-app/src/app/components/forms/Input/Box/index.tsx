import { Div } from './style'
import { forwardRef } from 'react'

type InputBoxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: 'text' | 'password'
}

export const InputBox = forwardRef<HTMLInputElement, InputBoxProps>(
  ({ type = 'text', spellCheck = false, ...inputProps }, ref) => {
    return (
      <Div.InputBox>
        <input ref={ref} type={type} spellCheck={spellCheck} {...inputProps} />
      </Div.InputBox>
    )
  },
)
