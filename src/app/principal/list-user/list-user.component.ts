import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';


import { Users } from 'src/app/models/users';
import { UsersServicesService } from 'src/app/services/users-services.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  search : string ="";

  usuarios: Users[]=[]
  displayedColumns = ['id','name','username', 'email'];
  
  constructor( private userService : UsersServicesService) {}

  ngOnInit() {
    this.userService.getUsersAll().subscribe((users:any) => this.usuarios = users);
    }

    Filtrar(username: string) {
      this.userService.getUsersAll().subscribe((users: Users[]) => {
        this.usuarios = users.filter((user: Users) => user.username.includes(username));
      });
    }
    

}




