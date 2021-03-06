import React, { Component } from "react";
import '../../components/styles/Solicitudes.css';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter, Label, Table, Input, Button, FormGroup, Row, Col } from 'reactstrap';
import Menu from '../../components/Menu/MenuAdministrador';
import * as firebase from 'firebase';

class CRUDSolicitud extends Component {
    state = {
        solicitudes: [],
        NewDataSolicitud: {
            Cliente: '',
            Correo: '',
            Asunto: '',
            Detalle: '',
            Prioridad: '',
            Aula: '',
            Fecha: ''
        },

        EditDataSolicitud: {
            id: '',
            Cliente: '',
            Correo: '',
            Asunto: '',
            Detalle: '',
            Prioridad: '',
            Aula: '',
            Fecha: ''
        },

        NewSolicitud: false,
        EditMSolicitud: false
    }

    componentWillMount() {
        this._refreshSolicitud();
    }

    //Nueva solicitud
    toggleNewSolicitud() {
        this.setState({
            NewSolicitud: !this.state.NewSolicitud
        })
    }

    //Editar solicitud

    toggleEditSolicitud() {
        this.setState({
            EditMSolicitud: !this.state.EditMSolicitud
        })
    }


    //Editar

    UpdateSolicitud() {

        let { key, Cliente, Correo, Asunto, Detalle, Prioridad, Aula, Fecha } = this.state.EditDataSolicitud;

        if (this.state.EditDataSolicitud.Cliente !== '' && this.state.EditDataSolicitud.Correo !== '' &&
            this.state.EditDataSolicitud.Asunto !== '' && this.state.EditDataSolicitud.Detalle !== '' &&
            this.state.EditDataSolicitud.Prioridad !== '' && this.state.EditDataSolicitud.Aula !== '' &&
            this.state.EditDataSolicitud.Fecha !== '') {

            firebase.firestore().collection('solicitudes').doc(key).update({
                Cliente, Correo, Asunto, Detalle, Prioridad, Aula, Fecha
            }).then(() => {
                alert('Actualizado con exito');
            }).catch((error) => {
                console.log(error);
                alert("Error al actualizar");
            }).finally(() => {
                this.setState({
                    EditMSolicitud: false, EditDataSolicitud: { id: '', Cliente: '', Correo: '', Asunto: '', Detalle: '', Prioridad: '', Aula: '', Fecha: '' }
                });
                this._refreshSolicitud();
            });
            /* axios.put('http://localhost:3001/solicitudes/' + this.state.EditDataSolicitud.id, {
                 Cliente, Correo, Asunto, Detalle, Prioridad, Aula, Fecha
             }).then((response) => {
                 this._refreshSolicitud();
                 this.setState({
                     EditMSolicitud: false, EditDataSolicitud: { id: '', Cliente: '', Correo: '', Asunto: '', Detalle: '', Prioridad: '', Aula: '', Fecha: '' }
                 })
             });*/

        } else {
            alert('Ingrese toda la información');
        }
    }

    editSolicitud(key, id, Cliente, Correo, Asunto, Detalle, Prioridad, Aula, Fecha) {
        this.setState({
            EditDataSolicitud: { key, id, Cliente, Correo, Asunto, Detalle, Prioridad, Aula, Fecha }, EditMSolicitud: !this.state.EditMSolicitud
        });
    }


    //Delete


    //Refresh
    _refreshSolicitud() {
        firebase.firestore().collection('solicitudes').get().then((response) => {
            const data =
                response.docs.map((m, key) => ({
                    Asunto: m.get('Asunto'),
                    Aula: m.get('Aula'),
                    Cliente: m.get('Cliente'),
                    Correo: m.get('Correo'),
                    Detalle: m.get('Detalle'),
                    Fecha: m.get('Fecha'),
                    Prioridad: m.get('Prioridad'),
                    id: key,
                    key: m.id
                }));
            this.setState({
                solicitudes: data
            })
        });

        /*  axios.get('http://localhost:3001/solicitudes').then((response) => {
              this.setState({
                  solicitudes: response.data
              })
          });*/
    }

    deleteSolicitud(key) {
        if (window.confirm("¿Estas seguro de eliminar esta solicitud?")) {
            firebase.firestore().collection('solicitudes').doc(key).delete().then(() => {
                alert("Eliminado correctamente");
            }).catch((error) => {
                console.log(error);
                alert("Error al eliminar");
            }).finally(() => {
                this._refreshSolicitud();
            });
            /*axios.delete('http://localhost:3001/solicitudes/' + id).then((response) => {
                this._refreshSolicitud();
            });*/
        }
    }


    addSolicitud() {

        if (this.state.NewDataSolicitud.Cliente !== '' && this.state.NewDataSolicitud.Correo !== '' &&
            this.state.NewDataSolicitud.Asunto !== '' && this.state.NewDataSolicitud.Detalle !== '' &&
            this.state.NewDataSolicitud.Prioridad !== '' && this.state.NewDataSolicitud.Aula !== '' &&
            this.state.NewDataSolicitud.Fecha !== '') {
            firebase.firestore().collection('solicitudes').add(this.state.NewDataSolicitud).then((response) => {

                this._refreshSolicitud();
                this.setState({
                    NewSolicitud: false,
                    NewDataSolicitud: {
                        Cliente: '',
                        Correo: '',
                        Asunto: '',
                        Detalle: '',
                        Prioridad: '',
                        Aula: '',
                        Fecha: ''
                    }
                });
            });

            /*axios.post('http://localhost:3001/solicitudes', this.state.NewDataSolicitud).then((response) => {
                let { solicitudes } = this.state;
                solicitudes.push(response.data);
                this.setState({
                    solicitudes, NewSolicitud: false, NewDataSolicitud: {
                        Cliente: '',
                        Correo: '',
                        Asunto: '',
                        Detalle: '',
                        Prioridad: '',
                        Aula: '',
                        Fecha: ''
                    }
                });
            });*/
            alert('Insertado con exito');
        } else {
            alert('Ingrese toda la información');
        }
    }

    //Render
    render() {
        let solicitudes = this.state.solicitudes.map((solicitud) => {
            return (

                <tr key={solicitud.id}>
                    <td>{solicitud.id}</td>
                    <td>{solicitud.Cliente}</td>
                    <td>{solicitud.Correo}</td>
                    <td>{solicitud.Asunto}</td>
                    <td>{solicitud.Detalle}</td>
                    <td>{solicitud.Prioridad}</td>
                    <td>{solicitud.Aula}</td>
                    <td>{solicitud.Fecha}</td>
                    <td>
                        <Button color="success" size="sm" className="mr-2" onClick={this.editSolicitud.bind(this, solicitud.key, solicitud.id, solicitud.Cliente, solicitud.Correo, solicitud.Asunto, solicitud.Detalle, solicitud.Prioridad, solicitud.Aula, solicitud.Fecha)}>Actualizar</Button>
                        <Button color="danger" size="sm" onClick={this.deleteSolicitud.bind(this, solicitud.key)}>Eliminar</Button>
                    </td>
                </tr>
            )
        });
        return (
            <div className="">
                <Menu />

                <div className="App container">

                    <h4>LISTADO DE SOLICITUDES</h4>

                    <Button color="primary" onClick={this.toggleNewSolicitud.bind(this)}>Nueva solicitud</Button>
                    <Modal isOpen={this.state.NewSolicitud} toggle={this.toggleNewSolicitud.bind(this)}>
                        <ModalHeader toggle={this.toggleNewSolicitud.bind(this)}>Nueva solicitud</ModalHeader>
                        <ModalBody>

                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="Cliente">Cliente</Label>
                                        <Input required name="Cliente" id="Cliente" placeholder="Ingrese su nombre completo." value={this.state.NewDataSolicitud.Cliente} onChange={(e) => {
                                            let { NewDataSolicitud } = this.state;
                                            NewDataSolicitud.Cliente = e.target.value;
                                            this.setState({ NewDataSolicitud });
                                        }
                                        } />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>

                                    <FormGroup>
                                        <Label for="Correo">Correo</Label>
                                        <Input required id="Correo" type="email" placeholder="Ingrese su correo (Formato de correo)." value={this.state.NewDataSolicitud.Correo} onChange={(e) => {
                                            let { NewDataSolicitud } = this.state;
                                            NewDataSolicitud.Correo = e.target.value;
                                            this.setState({ NewDataSolicitud });
                                        }
                                        } />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row form>
                                <Col md={6}>
                                    <FormGroup>

                                        <Label for="Asunto">Asunto</Label>
                                        <Input required id="Asunto" placeholder="Ingrese el asunto de su solicitud." value={this.state.NewDataSolicitud.Asunto} onChange={(e) => {
                                            let { NewDataSolicitud } = this.state;
                                            NewDataSolicitud.Asunto = e.target.value;
                                            this.setState({ NewDataSolicitud });
                                        }
                                        } />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="Detalle">Detalle</Label>
                                        <Input required id="Detalle" placeholder="Ingrese el detalle de su solicitud." value={this.state.NewDataSolicitud.Detalle} onChange={(e) => {
                                            let { NewDataSolicitud } = this.state;
                                            NewDataSolicitud.Detalle = e.target.value;
                                            this.setState({ NewDataSolicitud });
                                        }
                                        } />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="Prioridad">Prioridad</Label>
                                        <Input required id="Prioridad" type="select" value={this.state.NewDataSolicitud.Prioridad} onChange={(e) => {
                                            let { NewDataSolicitud } = this.state;
                                            NewDataSolicitud.Prioridad = e.target.value;
                                            this.setState({ NewDataSolicitud });
                                        }
                                        }
                                        >
                                            <option>Seleccione una opción</option>
                                            <option>Baja</option>
                                            <option>Media</option>
                                            <option>Alta</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="Aula">Aula</Label>
                                        <Input required id="Aula" type="number" placeholder="Ingrese el aula." value={this.state.NewDataSolicitud.Aula} onChange={(e) => {
                                            let { NewDataSolicitud } = this.state;
                                            NewDataSolicitud.Aula = e.target.value;
                                            this.setState({ NewDataSolicitud });
                                        }
                                        } />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="Fecha">Fecha</Label>
                                        <Input required id="Fecha" type="date" value={this.state.NewDataSolicitud.Fecha} onChange={(e) => {
                                            let { NewDataSolicitud } = this.state;
                                            NewDataSolicitud.Fecha = e.target.value;
                                            this.setState({ NewDataSolicitud });
                                        }
                                        } />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="warning" onClick={this.addSolicitud.bind(this)}>Enviar</Button>
                            <Button color="secondary" onClick={this.toggleNewSolicitud.bind(this)}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>






                    <Modal isOpen={this.state.EditMSolicitud} toggle={this.toggleEditSolicitud.bind(this)}>
                        <ModalHeader toggle={this.toggleEditSolicitud.bind(this)}>Editar solicitud</ModalHeader>
                        <ModalBody>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="Cliente">Cliente</Label>
                                        <Input id="Cliente" value={this.state.EditDataSolicitud.Cliente} onChange={(e) => {
                                            let { EditDataSolicitud } = this.state;
                                            EditDataSolicitud.Cliente = e.target.value;
                                            this.setState({ EditDataSolicitud });
                                        }
                                        } />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="Correo">Correo</Label>
                                        <Input id="Correo" value={this.state.EditDataSolicitud.Correo} onChange={(e) => {
                                            let { EditDataSolicitud } = this.state;
                                            EditDataSolicitud.Correo = e.target.value;
                                            this.setState({ EditDataSolicitud });
                                        }
                                        } />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>

                                        <Label for="Asunto">Asunto</Label>
                                        <Input id="Asunto" value={this.state.EditDataSolicitud.Asunto} onChange={(e) => {
                                            let { EditDataSolicitud } = this.state;
                                            EditDataSolicitud.Asunto = e.target.value;
                                            this.setState({ EditDataSolicitud });
                                        }
                                        } />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="Detalle">Detalle</Label>
                                        <Input id="Detalle" value={this.state.EditDataSolicitud.Detalle} onChange={(e) => {
                                            let { EditDataSolicitud } = this.state;
                                            EditDataSolicitud.Detalle = e.target.value;
                                            this.setState({ EditDataSolicitud });
                                        }
                                        } />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="Prioridad">Prioridad</Label>
                                        <Input id="Prioridad" value={this.state.EditDataSolicitud.Prioridad} onChange={(e) => {
                                            let { EditDataSolicitud } = this.state;
                                            EditDataSolicitud.Prioridad = e.target.value;
                                            this.setState({ EditDataSolicitud });
                                        }
                                        } />
                                    </FormGroup>
                                </Col>

                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="Aula">Aula</Label>
                                        <Input id="Aula" value={this.state.EditDataSolicitud.Aula} onChange={(e) => {
                                            let { EditDataSolicitud } = this.state;
                                            EditDataSolicitud.Aula = e.target.value;
                                            this.setState({ EditDataSolicitud });
                                        }
                                        } />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="Fecha">Fecha esperada</Label>
                                        <Input id="Fecha" type="date" value={this.state.EditDataSolicitud.Fecha} onChange={(e) => {
                                            let { EditDataSolicitud } = this.state;
                                            EditDataSolicitud.Fecha = e.target.value;
                                            this.setState({ EditDataSolicitud });
                                        }
                                        } />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="warning" onClick={this.UpdateSolicitud.bind(this)}>Actualizar</Button>
                            <Button color="secondary" onClick={this.toggleEditSolicitud.bind(this)}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>

                    <Table className="table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Cliente</th>
                                <th>Correo</th>
                                <th>Asunto</th>
                                <th>Detalle</th>
                                <th>Prioridad</th>
                                <th>Aula</th>
                                <th>Fecha esperada</th>
                            </tr>
                        </thead>
                        <tbody>
                            {solicitudes}
                        </tbody>
                    </Table>
                </div>
            </div>

        );
    }
}

export default CRUDSolicitud;
