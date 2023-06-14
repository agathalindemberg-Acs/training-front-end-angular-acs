import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent{

  lancamentos=[
      {tipo: 'DESPESA', descricao: 'Compra de pão', vencimento: new Date(2017,5,30), dataPagamento: null, valor: 4.55, pessoa: 'Padaria Brasil'},
      {tipo: 'RECEITA', descricao: 'Venda de software', vencimento: new Date(2017,6,10), dataPagamento: new Date(2017,6,9), valor: 80000, pessoa: 'Maracujá Eletrônica'},
      {tipo: 'DESPESA', descricao: 'Impostos', vencimento: new Date(2017,7,20), dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda'},
      {tipo: 'DESPESA', descricao: 'Mensalidade da escola', vencimento: new Date(2017,6,5), dataPagamento: new Date(2017,5,30), valor: 800, pessoa: 'Escolinha Sol Nascente'},
      {tipo: 'RECEITA', descricao: 'Venda de carro', vencimento: new Date(2017,8,18), dataPagamento: null, valor: 55000, pessoa: 'Marinelson'},
      {tipo: 'DESPESA', descricao: 'Aluguel', vencimento: new Date(2017,7,10), dataPagamento: new Date(2017,7,9), valor: 1750, pessoa: 'Imóveis Sebastian'},
      {tipo: 'DESPESA', descricao: 'Mensalidade da academia', vencimento: new Date(2017,7,13), dataPagamento: null, valor: 180, pessoa: 'Leônidas GYM'},
    ];
}
