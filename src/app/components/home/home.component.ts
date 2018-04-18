import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

// import * as instantsearch from 'instantsearch.js';
import instantsearch from 'instantsearch.js/dist-es5-module/src/lib/main';





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
        poweredBy: true
      })
    );

    // initialize hits widget
    this.search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits',
        templates: {
          empty: 'No results',
          item: `
                  <a href="/hotelprofile/{{{id}}}"><img src="assets/img/background.jpg" width="50px" height="60px">
                  <strong>Result {{id}}:</strong>
                  {{hotelName}}</a>`
        },
        escapeHits: true
      })
    );
    this.search.start();
  }
  ngOnInit() {
    this.searchProcess();
  }


}
