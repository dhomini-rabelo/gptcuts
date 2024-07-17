import { Text } from '../../components/common/Text'
import { Folder } from '../../components/general/Folder'
import { Input } from '../../components/forms/Input'
import { MagnifyingGlass } from 'phosphor-react'
import { Header } from '../../components/utils/Header'

export function PublicShortcutsPage() {
  return (
    <div className="body-df">
      <Header />
      <main className="w-full max-w-[70rem] mx-auto px-8">
        <div className="flex items-center justify-between pt-5 pb-4 mt-6">
          <h1 className="flex items-center gap-x-1">
            <img src="./icons/world.svg" className="h-8" />
            <Text variant="title">PUBLIC SHORTCUTS</Text>
          </h1>
          <div className="w-full max-w-[22rem]">
            <Input.Box
              type="text"
              placeholder="Search..."
              RightIcon={<MagnifyingGlass size={20} color="var(--Green-300)" />}
            />
          </div>
        </div>
        <section className="folders grid grid-cols-2 mt-10 gap-x-4 gap-y-8 pb-12">
          <Folder />
          <Folder />
        </section>
      </main>
    </div>
  )
}
