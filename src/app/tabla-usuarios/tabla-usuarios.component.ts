import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent
{

  data: Array<any> = [];

  constructor( private userS: UserService )
  {
    this.getAllUser();
  }

  getAllUser():void
  {
    this.userS.getAll().subscribe( response =>
    {
      this.data = response;
    });
  }

}
