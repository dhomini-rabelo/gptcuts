import { Text } from '../../components/common/Text'
import { Button } from '../../components/forms/Button'
import { Input } from '../../components/forms/Input'

export function RegisterPage() {
  return (
    <div className="body-df">
      <main className="mx-auto max-w-96 pt-32 pb-8">
        <h1 className="text-center flex gap-x-2 justify-center">
          <img src="./logo-white.svg" alt="GPT logo" />
          <Text variant="title">Create Account</Text>
        </h1>
        <form className="mt-8 flex flex-col gap-y-4">
          <Input.Root>
            <Input.Label>Username:</Input.Label>
            <Input.Box type="text" placeholder="Type your username" />
          </Input.Root>
          <Input.Root>
            <Input.Label>Email:</Input.Label>
            <Input.Box type="text" placeholder="Type your email" />
          </Input.Root>
          <Input.Root>
            <Input.Label>Password:</Input.Label>
            <Input.Box type="password" placeholder="Type your password" />
          </Input.Root>
          <Input.Root>
            <Input.Label>Confirm Password:</Input.Label>
            <Input.Box type="password" placeholder="Type your password again" />
          </Input.Root>
          <div className="mt-4 w-full">
            <Button>Register</Button>
          </div>
        </form>
      </main>
    </div>
  )
}
