import { NavLink } from 'react-router-dom'
import { Text } from '../../../components/common/Text'
import { Logo } from '../Logo'
import { HeaderLink } from './sub-components/HeaderLink'

export function Header() {
  return (
    <header className="flex py-5 bg-Purple-400">
      <div className="header-area flex w-full max-w-[75rem] px-12 mx-auto">
        <Logo />
        <nav className="flex gap-x-3 ml-auto">
          <NavLink to="/">
            <HeaderLink>
              <div className="flex items-center gap-x-2">
                <img src="/icons/world.svg" />
                <Text weight="regular">Public</Text>
              </div>
            </HeaderLink>
          </NavLink>
          <NavLink to="/my-shortcuts">
            <HeaderLink>
              <div className="flex items-center gap-x-2">
                <img src="/icons/profile.svg" />
                <Text weight="regular">Personal</Text>
              </div>
            </HeaderLink>
          </NavLink>
          <NavLink to="/exit">
            <HeaderLink>
              <div className="-rotate-180">
                <img src="/icons/exit.svg" />
              </div>
            </HeaderLink>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
