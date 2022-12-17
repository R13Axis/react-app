import React from "react";
import './styles.css'
import search from './assets/buscar.png'

const Navbar = () => {
    return (
        <div className="navbar">

            <div className="brand">

                <h1>Gaming Cloud</h1>

            </div>

            <div className="menu">
                <ul className="menu-list">
                    <li className="item">Inicio</li>
                    <li className="item">Accesorios</li>
                    <li className="item">Consumibles</li>
                    <li className="item">Nosotros</li>
                    <li className="item">Contacto</li>
                </ul>
            </div>

            <div className="icons">

                <img src={search} alt="search icon" ></img>

            </div>
            
        </div>
    )
}

export default Navbar