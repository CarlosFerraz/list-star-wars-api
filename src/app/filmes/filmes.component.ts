import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Filme } from 'src/app/model/filme';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {
  displayedColumns: string[] = ['episode_id', 'title', 'release_date', 'acao'];
  dataSource: Filme[];

  isLoadingResults = true;

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getFilmes()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
