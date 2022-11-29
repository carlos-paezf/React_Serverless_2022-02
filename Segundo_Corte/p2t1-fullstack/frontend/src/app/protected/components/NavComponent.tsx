import { Link, NavLink } from "react-router-dom"
import { useAppDispatch } from '../../util/hooks/dispatch'
import { logout } from "../../util/reducers/authSlice"
import escudoUSTA from '../../assets/images/escudo.png'


export const NavComponent = () => {
    const dispatch = useAppDispatch()

    const handleLogout = () => {
        dispatch( logout() )
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">

                    <img src={ escudoUSTA } width="50px" alt="Actas de Facultad" />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={ ( { isActive } ) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                } style={ { textDecoration: 'none' } } to="dashboard">Inicio</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a href="." className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Actas de Reunión
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="meeting-minutes">Galería de actas de reunión</Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link className="dropdown-item" to="meeting-minutes/create-meeting-minute">Crear una nueva acta</Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a href="." className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Usuarios
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="users/create-user">Crear un nuevo usuario</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="users">Lista de usuarios</Link>
                                    </li>

                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link className="dropdown-item" to="roles">Lista de roles</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <button className="btn btn-danger" onClick={ handleLogout }>Logout</button>
                    </div>
                </div>
            </nav>
        </>
    )
}