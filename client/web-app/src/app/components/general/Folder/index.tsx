import { CopySimple, LockSimple, PencilSimple } from 'phosphor-react'
import { Text } from '../../../components/common/Text'
import { FolderModal } from './sub-components/FolderModal'
import { useModals } from '../../../hooks/useModal'
import { ShortcutModal } from './sub-components/ShortcutModal '
import { FolderEntity, ShortcutEntity } from '../../../../code/entities'

export interface FolderData extends FolderEntity {
  shortcuts: ShortcutEntity[]
}

export function Folder({
  editable = false,
  folder,
}: {
  folder: FolderData
  editable?: boolean
}) {
  const { currentActiveModal, activateModal, disableModal } = useModals<
    'folder-modal' | 'shortcut-modal'
  >()

  return (
    <>
      {currentActiveModal === 'folder-modal' && (
        <FolderModal onClose={disableModal} editData={folder} />
      )}
      {currentActiveModal === 'shortcut-modal' && (
        <ShortcutModal onClose={disableModal} />
      )}
      <div className="folder bg-Black-100 rounded-2xl px-4 py-5 border-2 border-transparent hover:border-Gray-500 cursor-pointer relative">
        <header>
          <strong className="flex items-center justify-center gap-x-1.5">
            <img src="./icons/folder.svg" className="h-7 w-7" />
            <Text variant="title" size="md">
              {folder.name}
            </Text>
          </strong>
          <div className="mt-0.5 text-center">
            <Text size="sm" weight="regular" color="Gray-700">
              {folder.description}
            </Text>
          </div>
        </header>
        <main className="mt-2.5 flex flex-col gap-y-2">
          {folder.shortcuts.map((shortcut) => (
            <div className="group">
              <div
                className="bg-Black-300 hover:bg-Black-400 rounded-lg px-4 py-2 text-White-300 group-hover:text-white"
                onClick={() => activateModal('shortcut-modal')}
              >
                <div className="flex justify-between items-center">
                  <Text weight="regular" color={null}>
                    {shortcut.text}
                  </Text>
                  <span className="hidden group-hover:inline-block">
                    <CopySimple
                      size={24}
                      weight="fill"
                      className="inline-block text-White-300"
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </main>
        <div className="absolute top-4 right-4 flex items-center gap-x-0.5">
          {editable && (
            <>
              <PencilSimple
                size={24}
                className="text-Gray-700 hover:text-Gray-500 relative -top-0.5"
                onClick={() => activateModal('folder-modal')}
              />
              <LockSimple
                size={24}
                className="text-Gray-700 hover:text-Gray-500"
              />
            </>
          )}
        </div>
      </div>
    </>
  )
}
