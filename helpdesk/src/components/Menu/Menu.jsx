import React from 'react';
import "./Menu.scss";
import { NavLink } from 'react-router-dom';


function Menu () {
    const items = [
        {
            name:'INICIO',
            path:'/'
        }, {
            name:'ACERCA DE NOSOTROS',
            path:'/nosotros'
        }, {    
            name:'NUESTROS SERVICIOS',
            path:'/nuestros-servicios'
        }, {
            name:'A QUIÉN SERVIMOS',
            path:'/a-quien-servimos'
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
