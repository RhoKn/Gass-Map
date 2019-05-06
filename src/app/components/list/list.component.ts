import { Component, OnInit } from '@angular/core';
import {RestService} from '../../rest.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public requests: any = [];
  constructor(
    private rest:RestService
  ) { }

  ngOnInit() {
    /*this.rest.getAllObjects('https://api.datos.gob.mx/v1/precio.gasolina.publico').then(data => {
        this.requests = data.results;

        console.log(this.requests);
      });*/
  }

}
