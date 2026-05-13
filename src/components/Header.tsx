import { NavLink } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/signin', label: 'Log In' }
]

export default function Header() {
  return (
    <header>
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
