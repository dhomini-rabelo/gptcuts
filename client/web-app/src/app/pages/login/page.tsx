import { useForm } from 'react-hook-form'
import { Text } from '../../components/common/Text'
import { Button } from '../../components/forms/Button'
import { Input } from '../../components/forms/Input'
import { LoginSchema, LoginSchemaType } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function LoginPage() {
  const {
    handleSubmit,
    formState: { errors },
    getValues,
    register,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  })

  useEffect(() => {
    console.log({ errors, data: getValues() })
  }, [errors])

  async function onValidSubmit(data: LoginSchemaType) {
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
          <div className="mt-6 w-full">
            <Button type="submit">Login</Button>
          </div>
        </form>
        <div className="pt-8 text-center">
          <Text color="Gray-500" weight="regular">
            Don't have an account?{' '}
            <Link to="/register" className="text-Green-300">
              Register here
            </Link>
          </Text>
        </div>
      </main>
    </div>
  )
}
