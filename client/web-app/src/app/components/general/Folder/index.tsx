import { LockSimple, PencilSimple } from 'phosphor-react'
import { Text } from '../../../components/common/Text'
import { ShortcutModal } from './sub-components/ShortcutModal'
import { useModals } from '../../../hooks/useModal'

export function Folder() {
  const { currentActiveModal, activateModal, disableModal } =
    useModals<'shortcutModal'>()

  return (
    <>
      {currentActiveModal === 'shortcutModal' && (
        <ShortcutModal onClose={disableModal} />
      )}
      <div className="folder bg-Black-100 rounded-2xl px-4 py-5 border-2 border-transparent hover:border-Gray-500 cursor-pointer relative">
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
        <div className="absolute top-4 right-4 flex items-center gap-x-0.5">
          <PencilSimple
            size={24}
            color="var(--Gray-700)"
            onClick={() => activateModal('shortcutModal')}
          />
          <LockSimple size={24} color="var(--Gray-700)" />
        </div>
      </div>
    </>
  )
}
