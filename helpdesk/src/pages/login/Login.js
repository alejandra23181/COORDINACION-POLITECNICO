import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../login/styles/style.css';
import Image from '../../components/images/JIC.jpg';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.email !== '' && this.state.password !== '') {
            if (this.state.email === "maria_montoya23181@elpoli.edu.co" && this.state.password === "maria1234") {
                this.props.history.push('/Administrador');
            } else {
                if (this.state.email === "yuliana_estrada23181@elpoli.edu.co" && this.state.password === "yuli123") {
                    this.props.history.push('/Usuario');
                } else {
                    alert("El usuario ó la contraseña son incorrectos");
                }
            }
        } else {
            alert("Por favor ingrese toda la información")
        }
    }

    render() {
        return (
            <div className="container">
                <form className="form-signin" onSubmit={this.handleSubmit} >
                    <img className="mb-41" src={Image} alt="" width="75" height="75"></img>
                    <h1 className="h3 mb-3 font-weight-normal">Inicio de sesión</h1>
                    <label for="inputEmail" className="sr-only" >Correo</label>
                    <input type="email" id="email" className="form-control1"  placeholder="Ingresar correo electrónico" name="email" value={this.state.email} onChange={this.handleChange} required autofocus></input>
                    <label for="inputPassword" className="sr-only">Clave</label>
                    <input  type="password" id="password" className="form-control1" placeholder="Ingresar contraseña" name="password" value={this.state.password} onChange={this.handleChange} required></input>
                    <button class="btn1 btn-lg btn-primary btn-block"  type="submit">Ingresar</button>
                </form>
            </div>
        );
    }
}

export default Login;
