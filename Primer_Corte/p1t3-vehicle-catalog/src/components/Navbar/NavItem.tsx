import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import type { NavItemProps } from '../../types'


const NavItem: FC<NavItemProps> = ({ route, text }) => {
    return (
        <li className="nav-item">
            <NavLink to={ route } className={ ({ isActive }) => "nav-link" + (isActive ? ' active text-white' : ' text-secondary') }>{ text }</NavLink>
        </li>
    )
}


export default NavItem