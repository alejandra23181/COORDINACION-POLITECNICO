import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu1 from '../components/Menu/Menu2';
import Footer from '../components/Footer/Footer';
import CRUDSolicitud from '../pages/solicitud/CRUDSolicitud';


function Solicitudes() {
    return (
        <Router>
            <Menu1 />
            <Switch>
                <Route path="/solicitudes" component={CRUDSolicitud} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default Solicitudes;
