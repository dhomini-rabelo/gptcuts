import { Link } from 'react-router-dom'
import { Logo } from '../../components/utils/Logo'
import { Text } from '../../components/common/Text'

export function MyShortcutsPage() {
  return (
    <div className="body-df">
      <header className="flex py-5 bg-Purple-400">
        <div className="flex header-area w-full max-w-[75rem] px-12 mx-auto">
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
    </div>
  )
}
