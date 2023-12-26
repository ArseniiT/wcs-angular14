import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users: User[] = [];

  ngOnInit(): void {
    this.users.push(new User(
      'Luna Nightshade',
      'luna.night@example.com',
      'moonlight123',
      '456 Celestial Blvd, Star City'
    ));
  }
}
