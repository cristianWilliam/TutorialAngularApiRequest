import { Component } from '@angular/core';
import { CarroService } from './carro.service';
import { ICarro } from './ICarros';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ApiRequest';

  constructor(private carroService: CarroService)
  {}

  obterTodosCarros(){
    this.carroService.obterTodos()
      .then(carros => console.log(carros))
      .catch(error => console.error(error));
  }

  obterSomenteUm(){
    this.carroService.obterPorId(8)
      .then(carro => console.log(carro))
      .catch(error => console.error(error));
  }

  adicionarCarro(){
    const carro: ICarro = {
      nome: "Civic",
      marca: "Honda"
    };

    this.carroService.adicionar(carro)
      .then(carro => console.log('🟢 Adicionado'))
      .catch(error => console.error(error));
  }

  atualizar(){
    const carro: ICarro = {
      id: 8,
      nome: "Corolla",
      marca: "Toyota"
    };

    this.carroService.atualizar(carro)
      .then(carro => console.log('🔵 Att', carro))
      .catch(error => console.error(error));
  }

  remover(){
    this.carroService.delete(7)
      .then(res => console.log('🔴 Removido', res))
      .catch(error => console.error(error));
  }
  
}
