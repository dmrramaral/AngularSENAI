import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private readonly API = 'api/produto';

  constructor(private httpClient: HttpClient) { }

  list() : Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.API+'/listar');
  }

  deleted(id: number) : Observable<any>{
    return this.httpClient.delete(this.API+'/deletar/'+id);
  }



    

}
