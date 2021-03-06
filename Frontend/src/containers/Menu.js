import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../pages/home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NuestrosServicios from '../pages/nuestros-servicios/NuestrosServicios';
import Nosotros from '../pages/nosotros/Nosotros';
import Servimos from '../pages/servimos/Servimos';
import Footer from '../components/Footer/Footer';
import PrivateRoute from '../Auth';
import CRUDSolicitud from '../pages/solicitud/CRUDSolicitud';
import Login from '../pages/login/Login';
import Administrador from '../pages/login/Administrador';
import Usuario from '../pages/login/Usuario';

function Menu() {
  return (
    <Router>
      <Switch>
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/nuestros-servicios" component={NuestrosServicios} />
        <Route path="/a-quien-servimos" component={Servimos} />
        <Route path="/solicitudes" component={CRUDSolicitud} />   
        <Route path="/login" component={Login} /> 
        <Route path="/Administrador" component={Administrador} /> 
        <Route path="/Usuario" component={Usuario} /> 
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>

  );
}

export default Menu;
