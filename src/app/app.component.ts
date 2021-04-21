import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
declare  var grammar:  any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-jison';

  texto: FormControl;

  constructor(){
    this.texto = new FormControl(`Evaluar[1+1];
    Evaluar[1+1*2];
    Evaluar[-(1+1*6/3-5+7)];
    Evaluar[-(1+1*6/3-5+1*-2)];
    Evaluar[-(1.6+1.45)];`);
  }

  ejecutar() {
    grammar.parse(this.texto.value);
  }

}
