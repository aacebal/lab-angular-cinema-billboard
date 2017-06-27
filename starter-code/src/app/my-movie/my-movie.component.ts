import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieInformationService } from '../movie-information.service'

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  constructor(private myRoute: ActivatedRoute, private myService: MovieInformationService) { }

  movieId: string;
  myMovie: any;

  ngOnInit() {
      this.myRoute.params.subscribe((paramsResult) => {
      this.movieId = paramsResult['id'];
      });

      this.myMovie = this.myService.getMovie(parseInt(this.movieId));
  }

}
