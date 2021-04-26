import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Bienvenidos!</h1>
        <p>Bienvenido a una aplicacion web manejadora de datos:</p>
 <div class="col-md-4">
        <h2>Construido en Visual Studio:</h2>
        <p>Puedes contruir una aplicacion web parecida a esta:</p>
        <p><a class="btn btn-default" href="https://docs.microsoft.com/es-es/aspnet/core/data/ef-mvc/intro?view=aspnetcore-3.1">Mira el tutorial>></a></p>
    </div>
    <div class="col-md-4">
        <h2>Descargalo:</h2>
        <p>Puedes descargalo desde Github.</p>
        <p><a class="btn btn-default" href="https://github.com/SebastianVargas00/Proyecto-Final.git">Puedes ver el codigo fuente>></a></p>
    </div>
        
      </div>
    );
  }
}
