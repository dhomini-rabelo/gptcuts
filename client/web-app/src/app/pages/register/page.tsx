import { useForm } from 'react-hook-form'
import { Text } from '../../components/common/Text'
import { Button } from '../../components/forms/Button'
import { Input } from '../../components/forms/Input'
import { RegisterUserSchema, RegisterUserSchemaType } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'

export function RegisterPage() {
  const {
    handleSubmit,
    formState: { errors },
    getValues,
    register,
  } = useForm<RegisterUserSchemaType>({
    resolver: zodResolver(RegisterUserSchema),
  })

  useEffect(() => {
    console.log({ errors, data: getValues() })
  }, [errors])

  async function onValidSubmit(data: RegisterUserSchemaType) {
    console.log({ data })
  }

  return (
    <div className="body-df">
      <main className="mx-auto max-w-96 pt-16 pb-12">
        <h1 className="text-center flex gap-x-2 justify-center">
          <img src="./logo-white.svg" alt="GPT logo" />
          <Text variant="title">GPTCUTS</Text>
        </h1>
        <form
          className="mt-8 flex flex-col gap-y-3"
          onSubmit={handleSubmit(onValidSubmit)}
        >
          <Input.Root>
            <Input.Label>Username:</Input.Label>
            <Input.Box
              type="text"
              placeholder="Type your username"
              {...register('username')}
            />
            <Input.Message>{errors.username?.message}</Input.Message>
          </Input.Root>
          <Input.Root>
            <Input.Label>Email:</Input.Label>
            <Input.Box
              type="text"
              placeholder="Type your email"
              {...register('email')}
            />
            <Input.Message>{errors.email?.message}</Input.Message>
          </Input.Root>
          <Input.Root>
            <Input.Label>Password:</Input.Label>
            <Input.Box
              type="password"
              placeholder="Type your password"
              {...register('password')}
            />
            <Input.Message>{errors.password?.message}</Input.Message>
          </Input.Root>
          <Input.Root>
            <Input.Label>Confirm Password:</Input.Label>
            <Input.Box
              type="password"
              placeholder="Type your password again"
              {...register('confirm_password')}
            />
            <Input.Message>{errors.confirm_password?.message}</Input.Message>
          </Input.Root>
          <div className="mt-6 w-full">
            <Button type="submit">Create Account</Button>
          </div>
        </form>
      </main>
    </div>
  )
}
