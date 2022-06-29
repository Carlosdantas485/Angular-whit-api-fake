import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { ICar } from '../models/car';
import { BASE_URL } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CarService {


  constructor(private httpClient: HttpClient) { }


  // Obtem todos os carros
  getCars(){
    return this.httpClient.get<ICar[]>(`${BASE_URL}users/1`).toPromise();
     
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}