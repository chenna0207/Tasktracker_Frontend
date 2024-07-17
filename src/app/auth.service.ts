import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/token/';
  private baseUrl = 'http://127.0.0.1:8000/api/';
  private tokenKey = 'auth_token';
  private user: any;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password }).pipe(
      tap(response => {
        localStorage.setItem(this.tokenKey, response.access);
      }),
      catchError(this.handleError)
    );
  }

  signup(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}create_user/`, { username, password }).pipe(
      catchError(this.handleError)
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  private handleError(error: any): Observable<never> {
    return throwError('Invalid username or password');
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }

  getUserDetails() {
    return this.user;
  }

}
