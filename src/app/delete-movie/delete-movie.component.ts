import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {
  movieId!: number;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtiene el ID de la película desde la URL
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
  }

  deleteMovie() {
    this.movieService.deleteMovie(this.movieId).subscribe(() => {
      alert('Película eliminada exitosamente');
      this.router.navigate(['/movies']); // Redirige a la lista de películas
    });
  }

  cancel() {
    this.router.navigate(['/movies']); // Redirige a la lista de películas si se cancela
  }
}
