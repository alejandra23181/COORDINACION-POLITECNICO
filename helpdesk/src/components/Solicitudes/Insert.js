import React, { Component } from 'react';
import ImageNew from '../images/new.png';
import '../styles/Forms.css';
import axios from 'axios';

export default class Insert extends Component {
    constructor(props) {
        super(props);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeDescripcion = this.onChangeDescripcion.bind(this);
        this.onChangeFecha = this.onChangeFecha.bind(this);
        this.onChangeHora = this.onChangeHora.bind(this);
        this.onChangeUsuario = this.onChangeUsuario.bind(this);
        this.onChangeTecnico = this.onChangeTecnico.bind(this);
        this.onChangeCategoria = this.onChangeCategoria.bind(this);
        this.onChangeAula = this.onChangeAula.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Id: '',
            Descipción: '',
            Fecha: '',
            Hora: '',
            Usuario: '',
            Tecnico: '',
            Categoria: '',
            Aula: '',
        }
    }

    onChangeId(e) {
        this.setState({
            Id: e.target.value
        });
    }

    onChangeDescripcion(e) {
        this.setState({
            Descipción: e.target.value
        });
    }
    onChangeFecha(e) {
        this.setState({
            Fecha: e.target.value
        });
    }
    onChangeHora(e) {
        this.setState({
            Hora: e.target.value
        });
    }
    onChangeUsuario(e) {
        this.setState({
            Usuario: e.target.value
        });
    }
    onChangeTecnico(e) {
        this.setState({
            Tecnico: e.target.value
        });
    }
    onChangeCategoria(e) {
        this.setState({
            Categoria: e.target.value
        });
    }
    onChangeAula(e) {
        this.setState({
            Aula: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const obj = {
            Id: this.state.Id,
            Descipción: this.state.Descipción,
            Fecha: this.state.Fecha,
            Hora: this.state.Hora,
            Usuario: this.state.Usuario,
            Tecnico: this.state.Técnico,
            Categoria: this.state.Categoria,
            Aula: this.state.Aula
        };
        //nombre de la base despues del local
        axios.post('http://localhost/database/Insert.php', obj)
        .then(res => console.log(res.data));

        this.setState({
            Id: '',
            Descipción: '',
            Fecha: '',
            Hora: '',
            Usuario: '',
            Tecnico: '',
            Categoria: '',
            Aula: '',
        });
        console.log(obj);
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-4" src={ImageNew} alt="" width="72" height="72"></img>
                    <h2>Create new request</h2>
                </div>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">ID</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter" value={this.state.Id} onChange={this.onChangeId} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Descipción</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter descripción" value={this.state.Descipcion} onChange={this.onChangeDescripcion}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Fecha de solicitud</label>
                        <input type="date" className="form-control" id="exampleInputEmail1"  placeholder="Enter fecha" value={this.state.Fecha} onChange={this.onChangeFecha}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Hora</label>
                        <input type="time" className="form-control" id="exampleInputEmail1"  placeholder="Enter hora" value={this.state.Hora} onChange={this.onChangeHora}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Usuario</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter usuario" value={this.state.Usuario} onChange={this.onChangeUsuario}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Técnico</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter tecnico" value={this.state.Tecnico} onChange={this.onChangeTecnico}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Categoria</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter categoria" value={this.state.Categoria} onChange={this.onChangeCategoria}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Aula</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter aula" value={this.state.Aula} onChange={this.onChangeAula}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}