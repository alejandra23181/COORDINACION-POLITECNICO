import React, { Component } from "react";
import axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter, Label, Table, Input, Button, FormGroup } from 'reactstrap';


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
      Categoria: ''
    },

    EditDataSolicitud: {
      id: '',
      Cliente: '',
      Correo: '',
      Asunto: '',
      Detalle: '',
      Prioridad: '',
      Aula: '',
      Categoria: ''
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
      NewSolicitud: ! this.state.NewSolicitud
    })
  }

  //Editar solicitud

  toggleEditSolicitud() {
    this.setState({
      EditMSolicitud: ! this.state.EditMSolicitud
    })
  }

  addSolicitud() {
    axios.post('http://localhost:3001/solicitudes', this.state.NewDataSolicitud).then((response) => {
      let { solicitudes } = this.state;
      solicitudes.push(response.data);
      this.setState({ solicitudes, NewSolicitud: false,  NewDataSolicitud: {
          Cliente: '',
          Correo: '',
          Asunto: '',
          Detalle: '',
          Prioridad: '',
          Aula: '',
          Categoria: ''
        }      
      });
    });
  }

  //Editar

  UpdateSolicitud(){

    let { Cliente, Correo, Asunto, Detalle, Prioridad, Aula, Categoria} = this.state.EditDataSolicitud;

    axios.put('http://localhost:3001/solicitudes/' + this.state.EditDataSolicitud.id, {
      Cliente, Correo, Asunto, Detalle, Prioridad, Aula, Categoria
    }).then((response) => {
      this._refreshSolicitud();
      this.setState({
        EditMSolicitud: false, EditDataSolicitud: {id: '', Cliente: '', Correo: '', Asunto: '', Detalle: '', Prioridad: '', Aula: '', Categoria: ''}
      })
    });

  }

  editSolicitud(id, Cliente, Correo, Asunto, Detalle, Prioridad, Aula, Categoria){
    this.setState({
      EditDataSolicitud: {id, Cliente, Correo, Asunto, Detalle, Prioridad, Aula, Categoria}, EditMSolicitud: ! this.state.EditMSolicitud
    });
  }

    //Delete
    deleteSolicitud(id){
      axios.delete('http://localhost:3001/solicitudes/'+ id).then((response) => {
        this._refreshSolicitud();
      });
    }

  //Refresh
  _refreshSolicitud(){
    axios.get('http://localhost:3001/solicitudes').then((response) => {
      this.setState({
        solicitudes: response.data
      })
    });
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
          <td>{solicitud.Categoria}</td>
          <td>
            <Button color="success" size="sm" className="mr-2" onClick={this.editSolicitud.bind(this, solicitud.id,solicitud.Cliente,solicitud.Correo,solicitud.Asunto,solicitud.Detalle,solicitud.Prioridad,solicitud.Aula,solicitud.Categoria)}>Edit</Button>
            <Button color="danger" size="sm" onClick={this.deleteSolicitud.bind(this, solicitud.id)}>Delete</Button>
          </td>
        </tr>
      )
    });
    return (
      <div className="App container">

        <h1>Crear solicitud</h1>

        <Button color="primary" onClick={this.toggleNewSolicitud.bind(this)}>Nueva solicitud</Button>
        <Modal isOpen={this.state.NewSolicitud} toggle={this.toggleNewSolicitud.bind(this)}>
          <ModalHeader toggle={this.toggleNewSolicitud.bind(this)}>Modal title</ModalHeader>
          <ModalBody>

            <FormGroup>
              <Label for="Cliente">Cliente</Label>
              <Input id="Cliente"  value={ this.state.NewDataSolicitud.Cliente } onChange={(e)=>{
                let { NewDataSolicitud } = this.state;
                NewDataSolicitud.Cliente = e.target.value;
                this.setState({ NewDataSolicitud });
                }
              }/>
            </FormGroup>

            <FormGroup>
              <Label for="Correo">Correo</Label>
              <Input id="Correo" value={ this.state.NewDataSolicitud.Correo } onChange={(e)=>{
                let { NewDataSolicitud } = this.state;
                NewDataSolicitud.Correo = e.target.value;
                this.setState({ NewDataSolicitud });
                }
              }/>
            </FormGroup>
            <FormGroup>
              
              <Label for="Asunto">Asunto</Label>
              <Input id="Asunto" value={ this.state.NewDataSolicitud.Asunto } onChange={(e)=>{
                let { NewDataSolicitud } = this.state;
                NewDataSolicitud.Asunto = e.target.value;
                this.setState({ NewDataSolicitud });
                }
              }/>
            </FormGroup>

            <FormGroup>
              <Label for="Detalle">Detalle</Label>
              <Input id="Detalle" value={ this.state.NewDataSolicitud.Detalle } onChange={(e)=>{
                let { NewDataSolicitud } = this.state;
                NewDataSolicitud.Detalle = e.target.value;
                this.setState({ NewDataSolicitud });
                }
              }/>
            </FormGroup>

            <FormGroup>
              <Label for="Prioridad">Prioridad</Label>
              <Input id="Prioridad" value={ this.state.NewDataSolicitud.Prioridad } onChange={(e)=>{
                let { NewDataSolicitud } = this.state;
                NewDataSolicitud.Prioridad = e.target.value;
                this.setState({ NewDataSolicitud });
                }
              }/>
            </FormGroup>

            <FormGroup>
              <Label for="Aula">Aula</Label>
              <Input id="Aula" value={ this.state.NewDataSolicitud.Aula } onChange={(e)=>{
                let { NewDataSolicitud } = this.state;
                NewDataSolicitud.Aula = e.target.value;
                this.setState({ NewDataSolicitud });
                }
              }/>
            </FormGroup>

            <FormGroup>
              <Label for="Categoria">Categoria</Label>
              <Input id="Categoria" value={ this.state.NewDataSolicitud.Categoria } onChange={(e)=>{
                let { NewDataSolicitud } = this.state;
                NewDataSolicitud.Categoria = e.target.value;
                this.setState({ NewDataSolicitud });
                }
              }/>
            </FormGroup>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addSolicitud.bind(this)}>Enviar</Button>
            <Button color="secondary" onClick={this.toggleNewSolicitud.bind(this)}>Cancelar</Button>
          </ModalFooter>
        </Modal>
        

        <Modal isOpen={this.state.EditMSolicitud} toggle={this.toggleEditSolicitud.bind(this)}>
          <ModalHeader toggle={this.toggleEditSolicitud.bind(this)}>Modal title</ModalHeader>
          <ModalBody>

            <FormGroup>
              <Label for="Cliente">Cliente</Label>
              <Input id="Cliente"  value={ this.state.EditDataSolicitud.Cliente } onChange={(e)=>{
                let { EditDataSolicitud } = this.state;
                EditDataSolicitud.Cliente = e.target.value;
                this.setState({ EditDataSolicitud });
                }
              }/>
            </FormGroup>

            <FormGroup>
              <Label for="Correo">Correo</Label>
              <Input id="Correo" value={ this.state.EditDataSolicitud.Correo } onChange={(e)=>{
                let { EditDataSolicitud } = this.state;
                EditDataSolicitud.Correo = e.target.value;
                this.setState({ EditDataSolicitud });
                }
              }/>
            </FormGroup>
            <FormGroup>
              
              <Label for="Asunto">Asunto</Label>
              <Input id="Asunto" value={ this.state.EditDataSolicitud.Asunto } onChange={(e)=>{
                let { EditDataSolicitud } = this.state;
                EditDataSolicitud.Asunto = e.target.value;
                this.setState({ EditDataSolicitud });
                }
              }/>
            </FormGroup>

            <FormGroup>
              <Label for="Detalle">Detalle</Label>
              <Input id="Detalle" value={ this.state.EditDataSolicitud.Detalle } onChange={(e)=>{
                let { EditDataSolicitud } = this.state;
                EditDataSolicitud.Detalle = e.target.value;
                this.setState({ EditDataSolicitud });
                }
              }/>
            </FormGroup>

            <FormGroup>
              <Label for="Prioridad">Prioridad</Label>
              <Input id="Prioridad" value={ this.state.EditDataSolicitud.Prioridad } onChange={(e)=>{
                let { EditDataSolicitud } = this.state;
                EditDataSolicitud.Prioridad = e.target.value;
                this.setState({ EditDataSolicitud });
                }
              }/>
            </FormGroup>

            <FormGroup>
              <Label for="Aula">Aula</Label>
              <Input id="Aula" value={ this.state.EditDataSolicitud.Aula } onChange={(e)=>{
                let { EditDataSolicitud } = this.state;
                EditDataSolicitud.Aula = e.target.value;
                this.setState({ EditDataSolicitud });
                }
              }/>
            </FormGroup>

            <FormGroup>
              <Label for="Categoria">Categoria</Label>
              <Input id="Categoria" value={ this.state.EditDataSolicitud.Categoria } onChange={(e)=>{
                let { EditDataSolicitud } = this.state;
                EditDataSolicitud.Categoria = e.target.value;
                this.setState({ EditDataSolicitud });
                }
              }/>
            </FormGroup>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.UpdateSolicitud.bind(this)}>Enviar</Button>
            <Button color="secondary" onClick={this.toggleEditSolicitud.bind(this)}>Cancelar</Button>
          </ModalFooter>
        </Modal>
        



        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Cliente</th>
              <th>Corre</th>
              <th>Asunto</th>
              <th>Detalle</th>
              <th>Prioridad</th>
              <th>Aula</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody>
            {solicitudes}
          </tbody>
        </Table>
      </div>

    );
  }
}

export default CRUDSolicitud;
