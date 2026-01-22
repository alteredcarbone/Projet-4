import "../../assets/style/layout/header.scss"
import Logo from "../../assets/images/logo/LOGO.webp"
import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="header">
            <img src={Logo} alt="Kasa" className="header_logo"/>

            <nav className="header_nav" aria-label="Navigation principale">
                <NavLink 
                to="/" className={({ isActive }) =>
                `header_link ${isActive ? "is-active" : ""}`}>
                    Accueil
                </NavLink>
                <NavLink 
                    to="/about" className={({ isActive }) =>
                    `header_link ${isActive ? "is-active" : ""}`}>
                        A propos
                    </NavLink>
            </nav>
            
        </header>
        
    )
}



