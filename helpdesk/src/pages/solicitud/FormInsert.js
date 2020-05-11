import React from 'react';

class FormInsert extends React.Component {

    render() {
        return (
            <React.Fragment>

                <form onSubmit={this.props.onSubmit} >
                    <div className="form-group">
                        <label>Descipción</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="Descipción"
                            value={this.props.formValues.Descipción}
                        />
                    </div>
                    <div className="form-group">
                        <label>Fecha</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="Date"
                            name="Fecha"
                            value={this.props.formValues.Fecha}
                        />
                    </div>
                    <div className="form-group">
                        <label>Hora</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="time"
                            name="Hora"
                            value={this.props.formValues.Hora}
                        />
                    </div>
                    <div className="form-group">
                        <label>Usuario</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="Usuario"
                            value={this.props.formValues.Usuario}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tecnico</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="Tecnico"
                            value={this.props.formValues.Tecnico}
                        />
                    </div>
                    <div className="form-group">
                        <label>Categoria</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="Categoria"
                            value={this.props.formValues.Categoria}
                        />
                    </div>
                    <div className="form-group">
                        <label>Aula</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="Aula"
                            value={this.props.formValues.Aula}
                        />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">
                        Guardar
                </button>

                    {this.props.error && (
                        <p className="text-danger">{this.props.error.message}</p>
                    )}
                </form>
            </React.Fragment>
        );
    }
}

export default FormInsert;