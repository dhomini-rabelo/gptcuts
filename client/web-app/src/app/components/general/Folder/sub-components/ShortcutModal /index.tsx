import { Input } from '../../../../forms/Input'
import { Button } from '../../../../forms/Button'
import { SimpleModal } from '../../../../forms/modals/SimpleModal'
import { CopySimple } from 'phosphor-react'

type ShortcutModalProps = {
  onClose: () => void
}

export function ShortcutModal({ onClose }: ShortcutModalProps) {
  return (
    <SimpleModal title="Edit Shortcut" onClose={onClose}>
      <form className="mt-8 flex flex-col gap-y-3">
        <Input.Root>
          <Input.Label>Shortcut:</Input.Label>
          <Input.Box type="text-area" placeholder="Type your description" />
        </Input.Root>
        <footer className="mt-2 flex items-center justify-end w-full">
          <div className="w-32">
            <Button type="submit">
              <span className="flex items-center">
                <CopySimple
                  size={24}
                  weight="fill"
                  className="inline-block mr-1"
                />
                Copy
              </span>
            </Button>
          </div>
        </footer>
      </form>
    </SimpleModal>
  )
}
