import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = '';
  registrado=false
  nombre:string="";
  cargo:string="";
  apellido:string="";
  // entradas: object[];

  // constructor(){
  //   this.entradas=[
  //     {title:"sdfsd"},
  //   ]
  // }

  registrarUsuarios(){
    this.registrado=true;

    this.mensaje="Registrado!"
  }
}
