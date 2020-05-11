import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu1 from '../components/Menu/Menu2';
import Footer from '../components/Footer/Footer';
import Insert from '../pages/solicitud/Insert';

function Solicitudes() {
    return (
        <Router>
            <Menu1 />
            <Switch>
                <Route path="/Insert" component={Insert} /> 
                <Route path="/" component={Home} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default Solicitudes;
