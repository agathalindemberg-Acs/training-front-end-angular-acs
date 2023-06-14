import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  informacoes=[
    {nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado:'MG', status:'Ativo'},
    {nome: 'Sebastião da Silva', cidade: 'São Paulo', estado:'SP', status:'Inativo'},
    {nome: 'Carla Souza', cidade: 'Florianópolis', estado:'SC', status:'Ativo'},
    {nome: 'Luís Pereira', cidade: 'Curitiba', estado:'PR', status:'Ativo'},
    {nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado:'RJ', status:'Inativo'},
  ];
}
 