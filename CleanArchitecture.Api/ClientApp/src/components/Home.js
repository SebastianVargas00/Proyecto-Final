import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello,World!</h1>
        <p>Welcome to your new single-page application, built with:</p>
         <div class="col-md-4">
        <h2>Built it in Visual Studio:</h2>
        <p>You can build a similiar application with this Doc:</p>
        <p><a class="btn btn-default" href="https://docs.microsoft.com/es-es/aspnet/core/data/ef-mvc/intro?view=aspnetcore-3.1">See the tutorial>></a></p>
    </div>
    <div class="col-md-4">
        <h2>Download it:</h2>
        <p>You can Download it from Github.</p>
        <p><a class="btn btn-default" href="https://github.com/SebastianVargas00/Proyecto-Final.git">See the code>></a></p>
    </div>    
      </div>
    );
  }
}
