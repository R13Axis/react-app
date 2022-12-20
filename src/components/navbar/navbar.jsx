import React from "react";
import './styles.css'
import search from './assets/buscar.png'
import user from './assets/user.png'
import cart from './assets/bolso-shopping-cuadrado-con-asa.png'


const Navbar = () => {
    return (
        <div className="navbar">

            <div className="brand">

                <h1>Gaming Cloud</h1>

            </div>

            <div className="menu">
                <ul className="menu-list">
                    <a href="#" className="menu-ancors"><li className="item">Inicio</li></a>
                    <a href="#" className="menu-ancors"><li className="item">Accesorios</li></a>
                    <a href="#" className="menu-ancors"><li className="item">Consumibles</li></a>
                    <a href="#" className="menu-ancors"><li className="item">Nosotros</li></a>
                    <a href="#" className="menu-ancors"><li className="item">Contacto</li></a>
                </ul>
            </div>

            <div className="icons-container">

                <a href="#" className="icon-ancors"><img src={search} alt="search icon" className="icon" ></img></a>

                <a href="#" className="icon-ancors"><img src={user} alt="user icon" className="icon" ></img></a>

                <div>
                    <a href="#">
                        <img src={cart} alt="cart icon" className="icon" ></img>
                        <div className="items-number-cart-container">
                            <span className="items-number-cart">0</span>
                        </div>
                        
                    </a>
                </div>

            </div>
            
        </div>
    )
}

export default Navbar