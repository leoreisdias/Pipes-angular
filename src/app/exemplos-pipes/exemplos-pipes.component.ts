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
    url: "https://www.amazon.com.br/Queda-Gondolin-J-R-Tolkien/dp/8595083657/ref=asc_df_8595083657/?tag=googleshopp00-20&linkCode=df0&hvadid=379792561178&hvpos=&hvnetw=g&hvrand=15161706186504785299&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031668&hvtargid=pla-786135656817&psc=1"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
