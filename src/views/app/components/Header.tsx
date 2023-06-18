import { NavLink, Link } from 'react-router-dom'
import css from './styles/Header.module.scss'

export function Header() {

  const active = css.active
  return (
    <div className={css.header}>
      <Link to="/config" className={css.logo}></Link>
      <nav>

        <NavLink

          className={({isActive})=>(isActive?active:"")}  
          to="/form">
          Agregar
        </NavLink>

        <NavLink
          className={({isActive})=>(isActive?active:"")}  
          to="/list">
          Tareas
        </NavLink>

        <NavLink
          className={({isActive})=>(isActive?active:"")}  
          to="/config">
            Cuenta
        </NavLink>
      </nav>
    </div>
  )
}
