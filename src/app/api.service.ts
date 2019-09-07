import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Filme } from 'src/app/model/filme';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'GET, OPTIONS, PUT, POST'})
};
const apiUrl = 'https://swapi.co/api/films/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getFilmes (): Observable<Filme[]> {
    return this.http.get<Filme[]>(apiUrl)
    .pipe(
      map((res:any) => res.results),
      catchError(this.handleError('getFilmes', []))
    );
  }

  getFilme(id: number): Observable<Filme> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Filme>(url).pipe(
      tap(_ => console.log(`leu o filme id=${id}`)),
      catchError(this.handleError<Filme>(`getFilme id=${id}`))
    );
  }

  addFilme (filme): Observable<Filme> {
    return this.http.post<Filme>(apiUrl, filme, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((filme: Filme) => console.log(`adicionou o filme com w/ id=${filme.episode_id}`)),
      catchError(this.handleError<Filme>('addFilme'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}