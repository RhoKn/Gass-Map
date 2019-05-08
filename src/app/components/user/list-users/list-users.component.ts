import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../rest.service';
import { global } from '../../../services/global';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  public users: any = [];
  public totalUsers: number;
  constructor(
    private rest:RestService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.changeOptions().then( () =>{
      this.spinner.show(undefined,{fullScreen:false, type: 'ball-climbing-dot', size: 'medium'});
    });
    this.getAllUsers();
  }

  getAllUsers(){
    this.rest.getAllObjects(global.uriRoutes.users + global.uriMethods.viewAll).then((data)=>{
      setTimeout(() => {
        this.users = data.users;
      this.spinner.hide();
      }, 6000);
      this.totalUsers = data.total;
    });
  }

  async changeOptions() {
    // this only is an aux for the spinner
  }

}
