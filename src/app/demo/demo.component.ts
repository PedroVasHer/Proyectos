import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'proyectoNuevo';
  items2 = ['Pedro', 'Vásquez', 'Hernández'];

  power = 10;

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.items2.push('nuevo item');
  }

  delete(index: number) { // typeScript al ser tipada se le puede decir el tipo de variable. En este caso number
    this.items2.splice(index, 1);
  }

}
