import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getAllGames(): Observable<Game[]>{
    return this.http.get<Game[]>(`${this.apiServerUrl}/allGames`);
  }

  public getMonth(month: string, year: number): Observable<Game[]>{
    return this.http.get<Game[]>(`${this.apiServerUrl}/month/${month}/${year}`);
  }

  public getYear(year: number): Observable<Game[]>{
    return this.http.get<Game[]>(`${this.apiServerUrl}/year/${year}`);
  }

  public addGame(game: Game): Observable<Game>{
    return this.http.post<Game>(`${this.apiServerUrl}/addGame`, game);
  }

  public updateGame(game: Game): Observable<Game>{
    return this.http.put<Game>(`${this.apiServerUrl}/updateGame`, game);
  }

  public deleteGame(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/deleteGame/${id}`)
  }
}
