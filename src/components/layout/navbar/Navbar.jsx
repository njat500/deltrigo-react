import "./navbar.css"
import { CartWidget } from "../../common/Cart/CartWidget";
export const Navbar = () =>{
    return (<div className="header">
    <div className="header_h2">
        <img src="https://res.cloudinary.com/dtzcwtot7/image/upload/v1728614866/logo_argv2e.png" alt="Freely" />
    </div>
    <div className="navbar">
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Vuelos</li>
                <li>Contacto</li>
            </ul>
        </nav>
    </div>
    <CartWidget />
    </div>
    )
}