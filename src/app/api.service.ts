import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  // Project endpoints
  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/projects/`);
  }

  getProject(projectId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/projects/${projectId}/`);
  }

  // Task endpoints
  getTasks(projectId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/tasks/?project=${projectId}`);
  }

  getTask(taskId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tasks/${taskId}/`);
  }

  // User endpoints
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users/`);
  }

  getUser(userId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${userId}/`);
  }

  // UserProjectRole endpoints
  getUserProjectRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/userprojectroles/`);
  }

  getUserProjectRole(userProjectRoleId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/userprojectroles/${userProjectRoleId}/`);
  }

}
