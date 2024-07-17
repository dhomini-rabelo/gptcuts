import { Input } from '../../../../forms/Input'
import { Button } from '../../../../forms/Button'
import { SimpleModal } from '../../../../forms/modals/SimpleModal'

type ShortcutModalProps = {
  onClose: () => void
}

export function ShortcutModal({ onClose }: ShortcutModalProps) {
  return (
    <SimpleModal title="Edit Shortcut" onClose={onClose}>
      <form className="mt-8 flex flex-col gap-y-3">
        <Input.Root>
          <Input.Label>Title:</Input.Label>
          <Input.Box type="text" placeholder="Type your title" />
        </Input.Root>
        <Input.Root>
          <Input.Label>Description:</Input.Label>
          <Input.Box type="text-area" placeholder="Type your description" />
        </Input.Root>
        <div className="mt-6 w-full">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </SimpleModal>
  )
}
