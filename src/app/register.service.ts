import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private url = 'http://localhost:3000/register';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

  add (reg: any): Observable<any> {
    return this.http.post<any>(this.url, reg, this.httpOptions).pipe(
      tap((newReg: any) => console.info('register saved', newReg)),
      catchError(this.handleError<any>('add'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}