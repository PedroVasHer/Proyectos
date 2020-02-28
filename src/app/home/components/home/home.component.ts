import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  myswiper: Swiper;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() { // esto llama al swiper cuando inicia el componente
    this.myswiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }); // llama la clase del div en el que esta
  }

}
