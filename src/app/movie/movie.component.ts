import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie.interface';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie | undefined;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovie(this.route.snapshot.params['id']).subscribe((movie) => {
      this.movie = movie;
    })
  }

}
