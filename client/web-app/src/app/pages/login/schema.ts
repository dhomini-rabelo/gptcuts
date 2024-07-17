import { ErrorMessages, DynamicErrorMessages } from '../../utils/errors'
import * as zod from 'zod'

export const LoginSchema = zod.object({
  email: zod.string().min(1, ErrorMessages.REQUIRED),
  password: zod.string().min(8, DynamicErrorMessages.minLength(8)),
})

export type LoginSchemaType = zod.infer<typeof LoginSchema>
