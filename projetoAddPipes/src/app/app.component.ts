import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  nome ='Agatha Lindemberg';
  dataAniversario = new Date(1990, 3, 19);
  preco = 12855.32;
  troco = 0.57392;
}
