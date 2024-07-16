import styled, { css } from 'styled-components'
import { colors } from '../../../tokens/colors'
import { cssCondition } from '../../../utils/styles'

export type TextStyledProps = {
  color: keyof typeof colors
  variant: 'display' | 'title' | 'text'
  size: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  weight: 'bold' | 'medium' | 'regular'
}

export const Span = {
  Text: styled.span<TextStyledProps>`
    color: ${(props) => colors[props.color]};

    ${(props) =>
      cssCondition(props.variant === 'title') &&
      css`
        font-style: normal;
        line-height: 128%;

        ${cssCondition(props.weight === 'bold') &&
        `
        font-weight: 600;
        `}

        ${cssCondition(props.weight === 'medium') &&
        `
        font-weight: 500;
        `}
      
      ${cssCondition(props.weight === 'regular') &&
        `
        font-weight: 400;
        `}
      
      ${cssCondition(props.size === 'lg') &&
        `
        font-size: 1.75rem;
        `}
      `}
  `,
}
