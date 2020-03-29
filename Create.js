import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Create.css' ;

class Create extends Component {

  constructor() {
    super();
    this.state = {
      nom: '',
      prenom: '',
      date_n: '' ,
      mail: '' ,
      tel: '' ,
      grpsanguin:'' ,
      glycemie:'' ,
      hyper_tension_arter:'' ,
      cholesterol:'' ,
      triglyceride:'' ,
      transaminases:'' ,
    };
  }

// O N    C H A N G E S  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
onChangeNom = (event) => {
    this.setState({
        nom : event.target.value 
    })
}

onChangePrenom = (event) => {
    this.setState({
        prenom : event.target.value 
    })
}

onChangeDatenaissance = (event) => {
  this.setState({
    date_n : event.target.value 
  })
}


onChangeMail = (event) => {
  this.setState({
      mail : event.target.value 
  })
}

onChangeTel = (event) => {
  this.setState({
      tel : event.target.value 
  })
}


onChangeGrpsanguin = (event) => {
  this.setState({
    grpsanguin : event.target.value 
  })
}

onChangeGlycemie = (event) => {
  this.setState({
    glycemie : event.target.value 
  })
}

onChangeHyperTensionArter = (event) => {
  this.setState({
    hyper_tension_arter : event.target.value 
  })
}

onChangeCholesterol = (event) => {
  this.setState({
    cholesterol : event.target.value 
  })
}

onChangeTriglyceride = (event) => {
  this.setState({
    triglyceride : event.target.value 
  })
}

onChangeTransaminases = (event) => {
  this.setState({
    transaminases : event.target.value 
  })
}

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  onSubmit = (e) => {
    e.preventDefault();

    const {nom , prenom , mail , tel , grpsanguin , glycemie , date_n , hyper_tension_arter , cholesterol , triglyceride , transaminases} = this.state;

    axios.post('/fiches', {nom , prenom , nom , prenom , mail , tel , grpsanguin , glycemie , date_n , hyper_tension_arter , cholesterol , triglyceride , transaminases })
      .then((result) => {
        this.props.history.push("/")
      });
  }

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

  render() {
    const { nom , prenom , mail , tel , grpsanguin , glycemie , date_n , hyper_tension_arter , cholesterol , triglyceride , transaminases} = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">

              <center><br/>
                <h2 class="panel-title">
                  Ajout d'un patient
                </h2>
              </center> 

          </div>
          <div className="panel-body ">
            <h7><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Retour à la liste des patients</Link></h7>
            <center>
              <form onSubmit={this.onSubmit} >
{/*–––––––––––––––––––––––*/}<br/><h3>Informations personnelles</h3> <br/>
                <div className = "infoperso">
                  <br/>
    {/*––Nom––*/}
                  <div class="form-group">
                    <label for="isbn">Nom</label>
                    <input type="text" className="form-control" name="nom" value={nom} onChange={this.onChangeNom} placeholder="Nom" />
                  </div>
    {/*––Prenom––*/}
                  <div class="form-group">
                    <label for="title">Prenom</label>
                    <input type="text" class="form-control" name="prenom" value={prenom} onChange={this.onChangePrenom} placeholder="Prenom" />
                  </div>
    {/*——Date de naissance––*/}
                  <div class="form-group">
                   <label for="title">Date de naissance</label>
                    <input type="date" class="form-control" name="date_n" value={date_n} onChange={this.onChangeDatenaissance} placeholder="date_n" />
                  </div>

    {/*––Mail––*/}
                  <div class="form-group">
                    <label for="isbn">Adresse mail</label>
                    <input type="text" class="form-control" name="mail" value={mail} onChange={this.onChangeMail} placeholder="Adresse mail" />
                  </div>
    {/*––Tel––*/}
                  <div class="form-group">
                    <label for="title">Telephone</label>
                    <input type="text" class="form-control" name="tel" value={tel} onChange={this.onChangeTel} placeholder="Telephone" />
                  </div>
                  <br/>
                </div>
{/*–––––––––––––––––––––––*/}<br/><h3>Informations medicales</h3> <br/>
                <div className = "infoperso">
                                  <br/>
    {/*––Grope sanguin––*/}
                  <div class="form-group">
                    <label for="isbn">Groupe sanguin</label>
                    <select className="form-control" name="grpsanguin" value={grpsanguin} onChange={this.onChangeGrpsanguin} placeholder="Groupe sanguin">
                      <option value=" A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                  </select>
                  </div>
    {/*–– Glycemie ––*/}
                  <div class="form-group">
                    <label for="title">Taux de glycemie</label>
                    <input type="text" class="form-control" name="glycemie" value={glycemie} onChange={this.onChangeGlycemie} placeholder="Taux de glycémie" />
                  </div>
    {/*–– hyper_tension_arter ––*/}
                  <div class="form-group">
                    <label for="title">Hyper Tension Arter</label>
                    <input type="text" class="form-control" name="hyper_tension_arter" value={hyper_tension_arter} onChange={this.onChangeHyperTensionArter} placeholder="Taux de Hyper tension arter" />
                  </div>
    {/*–– Cholesterol ––*/}
                  <div class="form-group">
                    <label for="title">Taux de cholesterol</label>
                    <input type="text" class="form-control" name="cholesterol" value={cholesterol} onChange={this.onChangeCholesterol} placeholder="Taux de cholesterol" />
                  </div>
    {/*–– Triglyceride ––*/}
                  <div class="form-group">
                    <label for="title">Taux de triglyceride</label>
                    <input type="text" class="form-control" name="triglyceride" value={triglyceride} onChange={this.onChangeTriglyceride} placeholder="Taux de triglyceride" />
                  </div>
    {/*–– Transaminases ––*/}
                  <div class="form-group">
                    <label for="title">Taux de transaminases</label>
                    <input type="text" class="form-control" name="transaminases" value={transaminases} onChange={this.onChangeTransaminases} placeholder="Taux de transaminases" />
                  </div>

                  <br/>
                </div>


  
                <button type="submit" class="btn btn-default">Ajouter</button>
              </form>
            </center>


          </div>
        </div>
      </div>
    );
  }
}

export default Create;