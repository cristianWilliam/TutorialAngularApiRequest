import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { ICarro } from './ICarros';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private httpClient: HttpClient) { }

  obterTodos(){
    return this.httpClient.get<ICarro[]>(`${API_PATH}Carros`).toPromise();
  }

  obterPorId(id: number){
    return this.httpClient.get<ICarro>(`${API_PATH}Carros/${id}`).toPromise();
  }

  adicionar(carro: ICarro){
    return this.httpClient.post<ICarro>(`${API_PATH}Carros`, carro).toPromise();
  }

  atualizar(carro: ICarro){
    return this.httpClient.put<ICarro>(`${API_PATH}Carros/${carro.id}`, carro).toPromise();
  }

  delete(carroId: number){
    return this.httpClient.delete<void>(`${API_PATH}Carros/${carroId}`).toPromise();
  }
}
