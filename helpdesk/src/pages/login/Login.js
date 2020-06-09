import React, { Component } from 'react';
import { Redirect } from 'react-router';

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
            if(this.state.email == "maria_montoya23181@elpoli.edu.co" && this.state.password == "maria1234"){
                alert("admin");
                this.props.history.push('/Administrador');
            }else{
                if(this.state.email == "yuliana_estrada23181@elpoli.edu.co" && this.state.password == "yuli123"){
                    alert("docente");
                    this.props.history.push('/Usuario');
                }else{
                    alert("El usuario no existe");
                }
            }
        } else {
            alert("Por favor ingrese toda la información")
        }
    }

    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Correo</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Clave</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign In</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
