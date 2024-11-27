import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../movie.interface';
import { MovieService } from '../movie.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {
  movie: Movie = {
    id: 0,
    title: '',
    synopsis: '',
    year: new Date().getFullYear(),
    cover: ''
  }

  constructor(private movieService: MovieService, private router: Router) {}

  addMovie() {
    this.movieService.createMovie(this.movie).subscribe((newMovie) => {
      this.router.navigate([`/movies/${newMovie.id}`])
    })
  }
}
