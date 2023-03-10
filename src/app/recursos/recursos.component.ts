import { Component, Type } from '@angular/core';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent {
  list = [
    {name: "Angular", type: "Framework" },
    {name: "JavaScript", type: "Linguagem de Programação"},
    {name: "MySQL", type: "Banco de Dados"},
    {name: "Python", type: "Linguagem de Programação"},
  ]
}
