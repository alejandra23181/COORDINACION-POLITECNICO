import React from 'react';
import Insert from '../components/Solicitudes/Insert';
import Edit from '../components/Solicitudes/Edit';
import View from '../components/Solicitudes/View';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


function Solicitudes() {
    return (
        <BrowserRouter>
            <div className="" >
                <header>
                    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <h5 className="my-0 mr-md-auto font-weight-normal">Poli Dynamics</h5>
                        <nav className="my-2 my-md-0 mr-md-3">
                            <Link to={'/'} className="p-2 text-dark">Inicio</Link>
                            <Link to={'/'} className="p-2 text-dark">Disponibilidad</Link>
                            <Link to={'/Insert'} className="p-2 text-dark">Nueva solicitud</Link>
                            <Link to={'/View'}  className="p-2 text-dark">Listado de solicitudes</Link>
                        </nav>
                        <Link to={'/'} className="btn btn-outline-primary" href="#">My profile</Link>
                    </div>
                </header>

            <Switch>
                <Route exact path='/Insert' component={Insert} />
                <Route exact path='/Edit/:id' component={Edit} />
                <Route exact path='/View' component={View} />
            </Switch>

            </div>
        </BrowserRouter>

    );
}


export default Solicitudes;