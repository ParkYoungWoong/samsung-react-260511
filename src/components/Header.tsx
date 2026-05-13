import { NavLink } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/signin', label: 'Log In' }
]

export default function Header() {
  return (
    <header className="fixed top-0 right-0 border border-black">
      {navigations.map(nav => {
        return (
          <NavLink
            to={nav.to}
            className={({ isActive }) =>
              isActive ? 'font-bold text-red-500' : ''
            }>
            {nav.label}
          </NavLink>
        )
      })}
    </header>
  )
}
