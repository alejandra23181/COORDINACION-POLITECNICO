import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../pages/home/Home'
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu1 from '../components/Menu/Menu';
import NuestrosServicios from '../pages/nuestros-servicios/NuestrosServicios';
import Nosotros from '../pages/nosotros/Nosotros';
import Servimos from '../pages/servimos/Servimos';
import Footer from '../components/Footer/Footer';


function Menu() {
  return (
    <Router>
        <Menu1 />
        <Switch>
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/nuestros-servicios" component={NuestrosServicios} />
          <Route path="/a-quien-servimos" component={Servimos} />
          <Route path="/login" component={Home} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default Menu;
