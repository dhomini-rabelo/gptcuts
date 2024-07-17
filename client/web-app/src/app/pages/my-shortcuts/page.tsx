import { Text } from '../../components/common/Text'
import { Folder } from '../../components/general/Folder'
import { Header } from '../../components/utils/Header'

export function MyShortcutsPage() {
  return (
    <div className="body-df">
      <Header />
      <main className="w-full max-w-[70rem] mx-auto px-8">
        <div className="text-center">
          <h1 className="mt-12">
            <Text variant="title">MY SHORTCUTS</Text>
          </h1>
          <div>
            <Text size="sm" weight="regular" color="Gray-700">
              @someuser
            </Text>
          </div>
        </div>
        <section className="folders grid grid-cols-2 mt-8 gap-x-4 gap-y-8 pb-12">
          <Folder />
        </section>
      </main>
    </div>
  )
}
