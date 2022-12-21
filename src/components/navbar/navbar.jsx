
import React from "react";
import './styles.css'
import search from './assets/buscar.png'
import user from './assets/user.png'
import cart from './assets/bolso-shopping-cuadrado-con-asa.png'
import { Link } from "react-router-dom";


const Navbar = ({numberOfItems = 0, onHandlerCart}) => {

    return (

        <div className="navbar">

            <div>

                <Link to={'/home'} className="brand"><h1>Gaming Cloud</h1></Link>

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
                    <a onClick={onHandlerCart} href="#">
                        <img src={cart} alt="cart icon" className="icon" ></img>
                        <div className="items-number-cart-container">
                            <span className="items-number-cart"> {numberOfItems} </span>
                        </div>
                        
                    </a>
                </div>

            </div>

        </div>
    )
}

export default Navbar