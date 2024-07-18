import { Plus } from 'phosphor-react'
import { Text } from '../../components/common/Text'
import { Button } from '../../components/forms/Button'
import { Folder } from '../../components/general/Folder'
import { Header } from '../../components/utils/Header'
import { useLoginStore } from '../../../code/stores/auth'

export function MyShortcutsPage() {
  const { username } = useLoginStore((state) => ({
    accessToken: state.accessToken,
    username: state.username,
  }))

  return (
    <div className="body-df">
      <Header />
      <main className="w-full max-w-[70rem] mx-auto px-8">
        <div className="mt-12 flex items-center justify-between">
          <div className="flex flex-col">
            <h1>
              <Text variant="title">MY SHORTCUTS</Text>
            </h1>
            <div>
              <Text size="sm" weight="regular" color="Gray-700">
                @{username}
              </Text>
            </div>
          </div>
          <div>
            <Button type="submit">
              <span className="flex items-center">
                <Plus
                  size={16}
                  weight="bold"
                  className="inline-block mr-1 relative -top-[0.5px]"
                />
                Add folder
              </span>
            </Button>
          </div>
        </div>
        <section className="folders grid grid-cols-2 mt-8 gap-x-4 gap-y-8 pb-12">
          <Folder />
        </section>
      </main>
    </div>
  )
}
