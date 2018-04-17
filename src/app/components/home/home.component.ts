import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatahandleService} from '../../datahandle.service';
import { NgAisModule } from 'angular-instantsearch';
import { environment } from '../../../environments/environment';

import * as instantsearch from 'instantsearch.js';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }
  search: any;
  searchProcess() {
    const options = environment.algolia;

    this.search = instantsearch(options);

    this.search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-box',
        autofocus: false,
        placeholder: 'Hotel Location',
        poweredBy: false
      })
    );
    //
    // // initialize hits widget
    // this.search.addWidget(
    //   instantsearch.widgets.hits({
    //     container: '#hits',
    //     templates: {
    //       empty: 'No results',
    //       item: `<img src=https://image.tmdb.org/t/p/w300{{image_path}} width="50px">
    //             <strong>Result {{objectID}}</strong>:
    //             {{{_highlightResult.name.value}}}`
    //     },
    //     escapeHits: true
    //   })
    // );
    this.search.start();
  }
  ngOnInit() {
    this.searchProcess();
  }


}
