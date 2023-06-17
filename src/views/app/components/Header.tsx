import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <div>

      <nav>

        <NavLink to="/form">Agregar</NavLink>
        <NavLink to="/list">Tareas</NavLink>
        <NavLink to="/config">Cuenta</NavLink>
      </nav>
    </div>
  )
}
