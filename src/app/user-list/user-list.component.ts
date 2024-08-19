import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  userData: any[] = [
    {
      name: 'Arun',
      age: 28,
      phone: 9874563210,
    },
    {
      name: 'Abu',
      age: 35,
      phone: 8546321789,
    },
    {
      name: 'Rushaid',
      age: 28,
      phone: 9856741230,
    }
  ]
}
