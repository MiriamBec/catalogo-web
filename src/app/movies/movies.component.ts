import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.interface';
import { MovieService } from '../movie.service';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    })
  }

}



