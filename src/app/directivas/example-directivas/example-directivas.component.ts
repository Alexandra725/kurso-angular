import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-directivas',
  templateUrl: './example-directivas.component.html',
  styleUrls: ['./example-directivas.component.css'],
})
export class ExampleDirectivasComponent implements OnInit {

  colors: string[];
  show: boolean;
  texto: string;


  constructor() { }

  ngOnInit(): void {
    this.colors = ['red', 'blue', 'orange', 'pink', 'black'];
    this.show = true;
    this.texto = 'Angular';
  }

}
