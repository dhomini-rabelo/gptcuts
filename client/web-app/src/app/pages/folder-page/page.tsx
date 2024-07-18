import { Plus } from 'phosphor-react'
import { Text } from '../../components/common/Text'
import { Button } from '../../components/forms/Button'
import { Header } from '../../components/utils/Header'
import { useModals } from '../../hooks/useModal'
import { ShortcutModal } from '../../components/general/Folder/sub-components/ShortcutModal '

export function FolderPage() {
  const { currentActiveModal, activateModal, disableModal } =
    useModals<'shortcut-modal'>()

  return (
    <>
      {currentActiveModal === 'shortcut-modal' && (
        <ShortcutModal onClose={disableModal} />
      )}
      <div className="body-df">
        <Header />
        <main className="w-full max-w-[70rem] mx-auto px-8">
          <div className="mt-12 flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="flex items-center justify-center gap-x-2">
                <img src="./icons/folder.svg" className="h-7 w-7" />
                <Text variant="title">FOLDER NAME</Text>
              </h1>
              <div>
                <Text size="sm" weight="regular" color="Gray-700">
                  @someuser
                </Text>
              </div>
            </div>
            <div>
              <Button
                type="submit"
                onClick={() => activateModal('shortcut-modal')}
              >
                <span className="flex items-center">
                  <Plus
                    size={16}
                    weight="bold"
                    className="inline-block mr-1 relative -top-[0.5px]"
                  />
                  Add Shortcut
                </span>
              </Button>
            </div>
          </div>
          <section className="folders grid grid-cols-2 mt-8 gap-x-4 gap-y-8 pb-12">
            <div
              className="folder bg-Black-100 rounded-2xl px-4 py-5 border-2 border-transparent hover:border-Gray-500 cursor-pointer relative"
              onClick={() => activateModal('shortcut-modal')}
            >
              <main>
                <Text>
                  Qual a diferença entre "do" e "make"? Qual a diferença entre
                  "do" e "make"? Qual a diferença entre "do" e "make"?
                </Text>
              </main>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
