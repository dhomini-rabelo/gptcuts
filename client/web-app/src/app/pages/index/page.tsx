import { Link } from 'react-router-dom'
import { Logo } from '../../components/utils/Logo'
import { Text } from '../../components/common/Text'
import { Folder } from '../../components/general/Folder'
import { Input } from '../../components/forms/Input'
import { MagnifyingGlass } from 'phosphor-react'

export function PublicShortcutsPage() {
  return (
    <div className="body-df">
      <header className="flex py-5 bg-Purple-400">
        <div className="header-area flex w-full max-w-[75rem] px-12 mx-auto">
          <Logo />
          <nav className="flex gap-x-3 ml-auto">
            <Link to="/public-shortcuts">
              <div className="rounded-lg bg-Black-300 py-2 px-4 flex items-center gap-x-2 border-2 border-transparent">
                <img src="./icons/world.svg" />
                <Text weight="regular">Public</Text>
              </div>
            </Link>
            <Link to="/my-shortcuts">
              <div className="rounded-lg bg-Black-300 py-2 px-4 flex items-center gap-x-2 border-2 border-Gray-500">
                <img src="./icons/profile.svg" />
                <Text weight="regular">Personal</Text>
              </div>
            </Link>
            <Link to="/exit">
              <div className="rounded-lg bg-Black-300 p-2 flex items-center gap-x-2 border-2 border-transparent -rotate-180">
                <img src="./icons/exit.svg" />
              </div>
            </Link>
          </nav>
        </div>
      </header>
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
