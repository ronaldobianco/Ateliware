import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Repository } from './models/repository.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  repository: Repository[] = [];
  private apiRepository = environment.repositoryServer;

  constructor(private http: HttpClient) {}

  getListRepositories(): Observable<Repository[]> {
    return this.http
      .get<any>(`${this.apiRepository}getAllRepository`)
      .pipe(map((response) => response.body.data));
  }
  getRepositoryById(gitPath: string): Observable<Repository[]> {
    return this.http
      .post<any>(`${this.apiRepository}getRepository/`, {path:gitPath})
      .pipe(map((response) => [response.body.data]));
  }
  getGithubRepositories(language: string): Observable<Repository[]> {
    return this.http
      .get<any>(
        `${this.apiRepository}searchGitRepository?sort=stars&q=${language}&order=desc&per_page=5`
      )
      .pipe(map((response) => response.body.data.items));
  }
  postRepository(language: Repository): Observable<any> {
    return this.http.post<Repository>(
      `${this.apiRepository}postRepository`,
      language
    );
  }
  deleteRepository(repository: Repository): Observable<any> {
    return this.http.delete<any>(
      `${this.apiRepository}deteleRepository/${repository.id}`
    ).pipe(map((response) => response.body.data));
  }
}
