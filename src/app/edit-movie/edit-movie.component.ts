import { Component } from '@angular/core';
import { Movie } from '../movie.interface';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MovieService } from '../movie.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.css'
})
export class EditMovieComponent {
  movie: Movie = {
    id: 0,
    title: '',
    synopsis: '',
    year: new Date().getFullYear(),
    cover: ''
  }

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id).subscribe(movie => {
      this.movie = movie;
    });
  }

  updateMovie() {
    this.movieService.updateMovie(this.movie.id, this.movie).subscribe(() => {
      this.router.navigate([`/movies/${this.movie.id}`]);
    })
  }
}
