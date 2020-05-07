import React from 'react';
import '../components/styles/Home.css'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


function Menu() {
    return (
        <BrowserRouter>
            <div className="" >
                <header>
                    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                        <h5 className="my-0 mr-md-auto font-weight-normal">Poli Dynamics</h5>
                        <nav className="my-2 my-md-0 mr-md-3">
                            <Link to={'/'} className="p-2 text-dark">Inicio</Link>
                            <Link to={'/'} className="p-2 text-dark">Disponibilidad</Link>
                            <Link to={'/'} className="p-2 text-dark">Acerca de</Link>
                            <Link to={'/'} className="p-2 text-dark">Nuestros servicios</Link>
                            <Link to={'/'} className="p-2 text-dark">¿A quién servimos?</Link>
                        </nav>
                        <Link to={'/'} className="btn btn-outline-primary" href="#">Sign up</Link>
                    </div>
                </header>

            </div>
        </BrowserRouter>

    );
}


export default Menu;