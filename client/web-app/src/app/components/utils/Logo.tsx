import { Text } from '../../components/common/Text'

export function Logo() {
  return (
    <h1 className="text-center flex gap-x-2 justify-center items-center">
      <img src="./logo-white.svg" alt="GPT logo" />
      <Text variant="title">GPTCUTS</Text>
    </h1>
  )
}
