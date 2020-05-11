import React from 'react';
import FormInsert from '../solicitud/FormInsert';
import axios from 'axios';

class Insert extends React.Component {

    state = { 
        loading: false,
        error: null,
        form: {
            Descipción: '',
            Fecha: '',
            Hora: '',
            Usuario: '',
            Tecnico: '',
            Categoria: '',
            Aula: ''
    }};

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        axios.post('https://api-profiles-ag.now.sh/solicitud', this.state.form)
        .then(solicitud => this.setState({
            loading: false,
            }),
        )
        .catch(error => {
            this.setState({
                loading: false,
                error: error,
            })
        })
    };

    render(){


        return (
            <React.Fragment>
                <div className="ProfileNew__hero">
                    <span className="ProfileNew__hero-text">
                        "Bienvenido a la conferencia Geek! ,
                        esperamos todas nuestras charlas sean de tu total interes"
                    </span>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1>Nuevo Asistente</h1>
                            <FormInsert 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues =  {this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Insert;