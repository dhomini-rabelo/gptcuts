import { Text } from '../../../components/common/Text'

export function Folder() {
  return (
    <div className="folder bg-Black-100 rounded-2xl px-4 py-5 border-2 border-transparent hover:border-Gray-500 cursor-pointer">
      <header>
        <strong className="flex items-center justify-center gap-x-1.5">
          <img src="./icons/folder.svg" className="h-7 w-7" />
          <Text variant="title" size="md">
            ENGLISH
          </Text>
        </strong>
        <div className="mt-0.5 text-center">
          <Text size="sm" weight="regular" color="Gray-700">
            Folder com shortcuts em inglês
          </Text>
        </div>
      </header>
      <main className="mt-2.5 flex flex-col gap-y-2">
        <div className="bg-Black-300 rounded-lg px-4 py-2">
          <Text weight="regular" color="White-300">
            Qual a diferença entre "do" e "make"?
          </Text>
        </div>
        <div className="bg-Black-300 rounded-lg px-4 py-2">
          <Text weight="regular" color="White-300">
            Qual a diferença entre "do" e "make"?
          </Text>
        </div>
        <div className="bg-Black-300 rounded-lg px-4 py-2">
          <Text weight="regular" color="White-300">
            Qual a diferença entre "do" e "make"?
          </Text>
        </div>
      </main>
    </div>
  )
}
