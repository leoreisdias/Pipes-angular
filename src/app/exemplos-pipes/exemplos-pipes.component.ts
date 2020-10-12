import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: "A queda de Gondolin",
    rating: 4.9,
    numeroPaginas: 288,
    preco: 36.00,
    data: new Date(2018, 9, 3),
    url: "link aqui"
  }

  livros: any = ["angular2", 'java']

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  })



  constructor() { }

  ngOnInit(): void {
  }

}
