import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <h1>Olá mundo!</h1>
  `
})
export class AppComponent {
  title = 'front-end';

  constructor(titulo: Title) {
    titulo.setTitle("Início - eAgenda");
  }
}
