import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReasonComplaint } from './ReasonComplaint.model';

@Injectable({
  providedIn: 'root'
})
export class ReasonComplaintService {

  private baseURL = environment.api;
  private endpoint = 'reasoncomplaint';

  constructor(
    private router: Router,
    private httpReasonComplaint: HttpClient,
    private matSnackBar: MatSnackBar
  ) { }


    /**
    * Função para buscar dados paginados e ordenados pelos parametros da requisição na API
    * @param page number O numero da página que se deseja buscar
    * @param size number A quantidade de registros por página que será entregue na consulta
    * @param sort string Um texto com o nome da coluna do Objeto de ReasonComplaintDTO que representará a ordenação de acordo com o mesmo
    * @param direction  string contendo o direção da ordenação podendo ser asc ou desc 
    * @returns Observable<ReasonComplaint[]> Um observable com a lista do banco de dados contendo somente usuários sem filtro algum
    * @author Paulo Roberto da Silva
    * @version 1.0.0
    */
     list(page: number, size: number, sort: any = null, direction: any = null): Observable<ReasonComplaint[]> {
      if (sort !== null && direction !== null)
        return this.httpReasonComplaint.get<ReasonComplaint[]>(`${this.baseURL}/${this.endpoint}?page=${page}&size=${size}&sort=${sort},${direction}`).pipe();
      return this.httpReasonComplaint.get<ReasonComplaint[]>(`${this.baseURL}/${this.endpoint}?page=${page}&size=${size}`).pipe();
    }

    /**
   * Busca um ReasonComplainte pelo codigo do SIA
   * @param id 
   * @returns 
   */
     findId(id: number): Observable<ReasonComplaint> {
      return this.httpReasonComplaint.get<ReasonComplaint>(`${this.baseURL}/${this.endpoint}/${id}`).pipe();
    }
}
