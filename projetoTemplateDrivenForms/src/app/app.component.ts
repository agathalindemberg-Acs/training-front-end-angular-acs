import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

class Cliente{
  nome: string;
  email: string;
  profissao: '';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cliente = new Cliente();
  profissoes = ['Programador', 'Empresario', 'Outra'];

  salvar(form: NgForm){
    //this.cliente.nome = form.value.primeiroNome;
    //this.cliente.email = form.value.emailAddress;
    //this.cliente.profissao = form.value.profissao;
    console.log(form);
    console.log(this.cliente);
  
    form.reset({profissao:''});
  }



}
