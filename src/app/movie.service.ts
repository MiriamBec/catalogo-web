import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'http://127.0.0.1:8000/api/movies';

  constructor(private http: HttpClient) { }

  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.baseUrl, movie);
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl)
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/${id}`)
  }

  updateMovie(id: number, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.baseUrl}/${id}`, movie)
  }

  deleteMovie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
