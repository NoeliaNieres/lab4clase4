import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola!';
  nombre = 'Noe';
  mostrar = true;
  dato = 0;

 mostrarNombre(){

    console.log(this.nombre);
  
}

}

