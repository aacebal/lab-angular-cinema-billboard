import { Component, OnInit } from '@angular/core';
import { MovieInformationService } from '../movie-information.service'

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  movies: Object[]

  constructor(
    private myService: MovieInformationService
  ) { }

  ngOnInit() {
    this.movies = this.myService.getMovies();
  }

}
