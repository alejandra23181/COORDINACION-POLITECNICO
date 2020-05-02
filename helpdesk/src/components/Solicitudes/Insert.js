import React, { Component } from 'react';
import ImageNew from '../images/new.png';
import '../styles/Forms.css';

export default class Insert extends Component {
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-4" src={ImageNew} alt="" width="72" height="72"></img>
                    <h2>Create new request</h2>
                </div>

                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Descipción</label>
                        <textarea type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Fecha de solicitud</label>
                        <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Hora</label>
                        <input type="time" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Usuario</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Técnico</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Categoria</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Aula</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}