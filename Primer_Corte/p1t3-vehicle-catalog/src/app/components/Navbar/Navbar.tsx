import { FC } from "react"
import { NavLink } from 'react-router-dom'
import NavItem from "./NavItem"


const Navbar: FC = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-dark">
            <div className="container d-flex flex-row justify-content-between">
                <NavLink to="/" className="navbar-brand text-white">Gama Ferrari</NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavItem route="/catalog" text="Catalogo" />
                        <NavItem route="/create" text="Añadir vehículo" />
                        <NavItem route="/admin" text="Administración" />
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar