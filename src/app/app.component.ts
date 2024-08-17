import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-repo';

  userData:any[] = [
    {
      name:'Arun',
      age:28,
      phone:9874563210,
    },
    {
      name:'Abu',
      age:35,
      phone:8546321789,
    },
    {
      name:'Rushaid',
      age:28,
      phone:9856741230,
    }
]
}
