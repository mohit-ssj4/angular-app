import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RpsService {
  constructor(private httpClient: HttpClient) {}

  baseUrl = 'http://127.0.0.1:8000';

  public pingServer(): Observable<any> {
    return this.httpClient.get(this.baseUrl).pipe(catchError(this.handleError));
  }

  public playRPS(usersChoice: string): Observable<any> {
    return this.httpClient
      .get(this.baseUrl + '/play-rps/users_choice/' + usersChoice)
      .pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    return error.status.toString();
  }
}
