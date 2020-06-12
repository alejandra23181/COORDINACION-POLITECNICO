import React from 'react';
import "../styles/Menu.scss";
import { NavLink } from 'react-router-dom';


function MenuUsuario () {
    const items = [
        {
            name:'Inicio',
            path:'/Usuario'
        }, {
            name:'Perfil',
            path:'/Usuario'
        }, {
            name:'Gestión de solicitudes',
            path:'/Usuario'
        }
        , {
            name:'Cerrar sesión',
            path:'/'
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

export default MenuUsuario;
