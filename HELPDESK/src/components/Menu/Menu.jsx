import React from 'react';
import "../styles/Menu.scss";
import { NavLink } from 'react-router-dom';


function Menu () {
    const items = [
        {
            name:'Inicio',
            path:'/'
        }, {
            name:'Acerca de nosotros',
            path:'/nosotros'
        }, {    
            name:'Nuestros servicios',
            path:'/nuestros-servicios'
        }, {
            name:'A quién servimos',
            path:'/a-quien-servimos'
        }, {
            name:'Inicio de sesión',
            path:'/Login'
        }
    ]
    
    return (
        <header className="cp-menu" >
            <div className="cp-container">
                <h5 className="cp-title"><span>Poli</span> Dynamics</h5>
                <nav className="cp-nav">
                    {items.map( (item, index) => (
                        <NavLink exact={true} key={index} activeClassName="cp-item-active"  className="cp-item" to={item.path}>{item.name}</NavLink>
                    ) )}
                </nav>
            </div>
        </header>
    );
}

export default Menu;
