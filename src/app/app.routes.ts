import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';


export const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movies/new',
    component: AddMovieComponent
  },
  {
    path: 'movies/:id',
    component: MovieComponent
  },
  {
    path: 'movies/:id/edit',
    component: EditMovieComponent
  },
  {path: 'movies/:id/delete',
    component: DeleteMovieComponent
    },
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  }
];
