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

 mostrarNombre(){

    console.log(this.nombre);
  
}

}

